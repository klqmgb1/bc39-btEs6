function getEle(id){
    return document.getElementById(id)
}


tinhDTB = (... a)=>{
    console.log(a);
    let tongDiem = 0;
    return (a.map((a)=>{
        tongDiem += parseFloat(a)
    }),
    (tongDiem/ a.length).toFixed(2)
    )
},

getEle("btnKhoi1").onclick = () => {
    diemToan = getEle("inpToan").value;
    diemLy = getEle("inpLy").value;
    diemHoa = getEle("inpHoa").value;
    console.log(diemToan, diemLy, diemHoa);
getEle("tbKhoi1").innerHTML = tinhDTB(diemToan, diemLy, diemHoa)
}

getEle("btnKhoi2").onclick = () => {
    diemVan = getEle("inpVan").value;
    diemSu = getEle("inpSu").value;
    diemDia = getEle("inpDia").value;
    diemTA = getEle("inpEnglish").value;
getEle("tbKhoi2").innerHTML = tinhDTB(diemVan, diemSu, diemDia, diemTA)
}