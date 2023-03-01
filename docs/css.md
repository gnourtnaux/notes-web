### **CSS** ###
Cấu trúc của một câu lệnh CSS:

    Selector {property:value; property: value; ...}
        ex: h1{color:blue; font-size:12px;}

Link CSS vào HTML:

    <link rel="stylesheet" href="index.css">

### **Rule CSS**###
Các loại cấu trúc của CSS:

Float:

    float: direction;
Trong đó direction chỉ hướng vector mà các thẻ sẽ dính vào

    Ex: float:left
    ==> Từ <div1>
            <div2>
            <div3>
        sẽ thành <div1><div2><div3>

        float:right
    ==> sẽ thành <div3><div2><div1>

Lưu ý là chỉ nhảy khối khi width của thẻ cha chứa đủ width thẻ con