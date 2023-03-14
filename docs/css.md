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

Align-item => căn theo chiều dọc
justify-content => căn theo chiều ngang

Chia tỉ lệ các phần tử con trong một phần tử cha sao cho tổng tỉ lệ của chúng bằng 12

***********Để căn vị trí các phần tử thì nên bọc Flex và dùng justify-position
Ex:

    flex justify-start
    flex justify-center

Justify content dùng cho Block, justify item dùng cho Inline 