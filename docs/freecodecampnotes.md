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
hoặc dùng 1 cách khác là sử dụng dấu ' ' để đóng mở string và dấu " " để đóng mở trích dẫn. Ex:

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

_Array có cấu trúc [data1,data2,data3,...], data có thể là bất kì loại data nào

Có thể thêm array vào array, ex:

    const teams = [["Bulls", 23], ["White Sox", 45]];
Dùng index để lấy giá trị trong array. Ex:

    const array = [50, 60, 70];
    console.log(array[0]);
    const data = array[1];  
        ==> Console hiện 50; giá trị của data là 60

_Hàm 

    console.log(variable);
dùng để hiển thị giá trị của variable đã khai báo trong màn hình console

_Giá trị trong 1 chuỗi là bất biến nhưng array thì có thể thay đổi. Ex:

    const ourArray=[50, 40, 20];
    ourtArray[2]=30;
    ==> Array sẽ thành 50, 40, 30
_Với multi-array thì call index lần thứ bao nhiêu thì vào sâu trong array bấy nhiêu. Ex:

    const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14] 
    ];

    const subarray = arr[3]; ==> subarray value = [[10, 11, 12], 13, 14]
    const nestedSubarray = arr[3][0]; ==> nestedSubarray value = [10, 11, 12]
    const element = arr[3][0][1];==> element value = 11
    *Lưu ý khi call index phải viết liền nhau.

_Thêm data vào cuối array bằng function: 

    .push()

Ex:

        const arr1 = [1,"a",3];
        arr1.push(4); ==> arr1 value = 1,a,3,4
        arr1.push("hehe"); ==> arr1 value = 1,a,3,4,hehe
        arr1.push(["haha",5]) ==> arr1 value = [1,a,3,4,hehe,[haha,5]]

 _Ngắt element cuối cùng của array bằng function:

        .pop()
Ex:

        const baKiTu=["mot","hai","ba"];
        const layKiTuCuoi = baKiTu.pop();
        console.log(baKiTu); ==> mot, hai
        console.log(layKiTuCuoi); ==> ba

_Ngắt element đầu tiên của array bằng function:

        .shift()
Ex tương tự pop()

_Thêm data vào đầu array bằng function:

    .unshift()

Ex tương tự push()

_Chuyển number thành string dùng .toString(); chuyển string thành array dùng .split(''); đảo ngược vị trí các kí tự trong array dùng .reverse(); ghép các phần tử trong array thành string dùng .join(''); chuyển string thành số dùng Number(string).