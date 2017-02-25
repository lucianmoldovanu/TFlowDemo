sap.ui.controller("hack.ui.upload", {
	onInit: function(oController) {
		_oController = oController;
	},
	
	handleUploadPress: function(oEvent) {
	    var oFileUploader = this.getView().byId("fileUploader");
	    oFileUploader.upload();
	},
	
	handleUploadComplete: function(oEvent) {
		var a=1;
	}
});
