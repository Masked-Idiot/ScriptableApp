export const app = {
	files: FileManager.local(),
	run: function(){
		console.log(this.files.documentsDirectory())
	}
};