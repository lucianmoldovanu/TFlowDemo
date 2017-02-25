sap.ui.controller("hack.ui.upload", {
	onInit: function(oController) {
		_oController = oController;
	},
	
	handleUploadPress: function(oEvent) {
		var oFileUploader = this.getView().byId("fileUploader");
		
	    oFileUploader.addHeaderParameter(new sap.ui.unified.FileUploaderParameter({
	        name: "slug",
	        value: oFileUploader.getValue()
	    }));

	    //oFileUploader.addHeaderParameter(new sap.ui.unified.FileUploaderParameter({
	    //    name: "x-csrf-token",
	    //    value: sap.ui.getCore().byId("idApp").getModel().getSecurityToken()
	    //}));
	    
	    //oFileUploader.setUploadUrl('./uploadBackend');
		oFileUploader.upload();
	},

	handleUploadComplete: function(oEvent) {
		var a=1;
	}
});
