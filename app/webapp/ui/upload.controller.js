sap.ui.controller("hack.ui.upload", {
	onInit: function(oController) {
		_oController = oController;
	},
	
	onAfterRendering: function() {
		_oTable = sap.ui.getCore().byId("idApp").getPage("Upload").byId("idProductsTable");
	},
	
	handleUploadPress: function(oEvent) {
	    var oFileUploader = this.getView().byId("fileUploader");
	    oFileUploader.upload();
	},
	
	handleUploadComplete: function(oEvent) {
		sap.ui.getCore().byId('idApp').to('Result');
		//sap.ui.controller('hack.ui.upload')
		this.createDataModel(oEvent.getParameter('response').split('\n').filter(function(rec) {return rec != ""});
	},
	
	createDataModel: function(aData) {
		var oData = aData.map(function(rec) {return {row: rec}});
		
		//populate table
		var oModel = new sap.ui.model.json.JSONModel({data: oData});
		_oTable.setModel(oModel);
		oModel.refresh();
		
		//populate word cloud
		var words = oData.map((rec) => ({
			text: rec.row.split(' (')[0],
			size: 30 + 70 * parseFloat(rec.row.split('(score = ')[1].split(')')[0])
		}));
		
		var divWordCloud = this.wordCloud('wordCloud');
		divWordCloud.update(words);
	},
	
	wordCloud: function(selector) {
		var fill = d3.scale.category20();

		//Construct the word cloud's SVG element
		var svg = d3.select(selector).append("svg")
		.attr("width", 500)
		.attr("height", 500)
		.append("g")
		.attr("transform", "translate(250,250)");


		//Draw the word cloud
		function draw(words) {
		var cloud = svg.selectAll("g text")
		.data(words, function(d) { return d.text; })

		//Entering words
		cloud.enter()
		.append("text")
		.style("font-family", "Impact")
		.style("fill", function(d, i) { return fill(i); })
		.attr("text-anchor", "middle")
		.attr('font-size', 1)
		.text(function(d) { return d.text; });

		//Entering and existing words
		cloud
		.transition()
		.duration(600)
		.style("font-size", function(d) { return d.size + "px"; })
		.attr("transform", function(d) {
		return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
		})
		.style("fill-opacity", 1);

		//Exiting words
		cloud.exit()
		.transition()
		.duration(200)
		.style('fill-opacity', 1e-6)
		.attr('font-size', 1)
		.remove();
		}


		//Use the module pattern to encapsulate the visualisation code. We'll
		// expose only the parts that need to be public.
		return {

		//Recompute the word cloud for a new set of words. This method will
		// asycnhronously call draw when the layout has been computed.
		//The outside world will need to call this function, so make it part
		// of the wordCloud return value.
		update: function(words) {
		d3.layout.cloud().size([500, 500])
		.words(words)
		.padding(5)
		.rotate(function() { return ~~(Math.random() * 2) * 90; })
		.font("Impact")
		.fontSize(function(d) { return d.size; })
		.on("end", draw)
		.start();
		}
		}

	},
	
		
});
