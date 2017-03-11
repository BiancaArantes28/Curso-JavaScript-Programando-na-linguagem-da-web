var trs = document.getElementsByTagName("tr");
for(var i = 0;i<trs.length;i++){
	trs[i].addEventListener("mouseover",function(){
		this.setAttribute("bgcolor","grey");
	});
}