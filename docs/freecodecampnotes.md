### **NOTICE IN FREECODECAMP** ###
_Thông thường sẽ đặt tên biến ở dạng Uppercase khi sử dụng khai báo bằng const, còn đặt tên biến ở dạng camelCase khi sử dụng khai báo bằng let.

Ex:

        const FAV_CLUB = "Manchester United";
        let favClub = "Manchester United";


_Toán tử % giữa 2 số cho biết số dư của phép chia 2 số đó. Ex:

    const remainder = 11 % 3; ==> KQ ra 2

_Đối với trường hợp muốn cộng 1 số cho 1 biến đã khai báo ban đầu thì để tránh dài dòng, sử dụng cấu trúc += , ex:

        let soDauTien = 1;
        soDauTien = soDauTien + 5;
        đổi thành ==> 
        soDauTien += 5;
Tương tự với -= ; *= và /=

_Để tạo một trích dẫn trong dấu "" thì nên dùng \ để không bị ngắt giữa dòng. Ex:

    const doanVan = "Albert Einstein wrote, \“Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid\”."
hoặc dùng 1 cách khác là sử dụng dấu '' để đóng mở string và dấu "" để đóng mở trích dẫn. Ex:

    const doanVan = 'Albert Einstein wrote, “Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid”.'

_Có thể thêm 1 biến là chuỗi vào 1 chuỗi khác khi khai báo chuỗi đó. Ex:

    const tenToila = "Xuan Truong";
    const  chuoiCuaToi = "Hello, neu ban khong biet thi toi la" + tenToila + ",con ban biet roi thi ke ban.";

hoặc có thể dùng += với tên 2 biến. Ex:

    const moTa = "Provjp so 1 Gia Lai";
    const aiVay = "Xuan Truong";
    aiVay += moTa; ==> Xuan Truong Provjp so 1 Gia Lai

_Kiểm tra độ dài chuỗi bằng cách thêm .length sau giá trị của chuỗi. Ex:

    let doDaiCuaTenToi=0;
    const tenToiLa="Xuan Truong";
    doDaiCuaTenToi=tenToiLa.length; ==>11

_Dùng ngoặc vuông để lấy kí tự trong chuỗi [], lưu ý index của kí tự đầu tiên là 0. Ex:

    const hoVaTen="Cao Xuan Truong";
    const kiTuLay = hoVaTen[5]; ==> u
    Lúc này kiTuLay có giá trị là u

_Giá trị trong 1 chuỗi là bất biến, tuy nhiên ta lại có thể gán cho chuỗi đó 1 giá trị khác. Ex:

    let myStr="Truong";
    myStr[2]="e"; ==> K có gì xảy ra
    Nhưng:
    let myStr="Truong";
    myStr="Gnourt"; ==> Gnourt

_Để lấy kí tự cuối của một chuỗi thì lấy index bằng cách lấy độ dài chuỗi trừ đi 1 (vì kí tự đầu tiên có index bằng 0). Ex:

        const tenToiLa="Cao Xuan Truong";
        const kiTuCuoi=tenToiLa[tenToiLa.length-1]; =>g
  tương tự, để lấy kí tự thứ N từ kí tự cuối qua thì trừ đi N. Ex:
        
        const tenToiLa="Cao Xuan Truong";
        const layChuR = tenToiLa[tenToiLa.length-5];
