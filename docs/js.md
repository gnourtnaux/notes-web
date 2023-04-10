Javascript là ngôn ngữ lập trình được tạo ra để gắn elements cho document
Typescript là ngôn ngữ được tạo ra dựa trên nền tảng javascript nhưng nó có các quy tắc khắt khe hơn để hạn chế các bug thường gặp ở JS

Lệnh usestrict để đặt các strict khiến cho việc sử dụng code trở nên nghiêm ngặt hơn, ví dụ:
    _Biến phải được khai báo trước khi sử dụng


### **I. VARIABLE** ###
Một variable (biến) là một phần tử được sử dụng để đặt tên cho data
Để sử dụng biến trong JS  sử dụng lệnh let

Ex: Tạo một biến có tên là thongbao:

     let thongbao;

Gắn data vào biến:  

    thongbao = 'Hello';
Khi này ví dụ dùng lệnh alert cho biến thông báo: 

    alert(thongbao); ==> hiện 1 alert có nội dung là Hello

Có thể khai báo nhiều biến liên tục, ngăn cách bằng dấu phẩy:
        
        let use = 'Truong', age = 24, message = 'Hello';


### **II. DATA TYPES** ###
Một giá trị trong JS luôn thuộc một loại dữ liệu nhất định, có thể là một chuỗi kí tự, một số, ...
Một biến có thể chứa nhiều kiểu dữ liệu cùng lúc, ex:

        var message = "hello";
        message  = 12345;
Có 8 loại dữ liệu cơ bản trong JS:

1. number : kiểu số
  
    Dùng cho bất kì loại số nào: số nguyên hoặc số có dấu chấm động trong giới hạn +-(2^53 - 1).
    Có thể dùng kèm phép tính + - * /, một số phép tính không hợp lệ hoặc không xác định chẳng hạn 1 số chia cho 0 hoặc thực hiện các phép tính không phải là số thì dùng NaN (not a number). Ex:

        alert("not a number"/2)
2. biglnt
   
    Dùng cho các số có độ lớn vượt ngoài giới hạn của number, tạo một giá trị BigInt bằng cách thêm n vào 1 số nguyên hoặc dùng hàm BigInt() , ex:

        const bigInt = 1234567890123456789012345678901234567890n;
3. string : kiểu chuỗi
   
    Một chuỗi trong JS được đặt nằm trong 1 dấu nháy, có 3 dạng chuỗi:
        Nằm trong nháy kép:

         "Hello"
    Nằm trong nháy đơn:

        'Hello'

    Nằm trong backtick:

        `Hello` 
    Ngoặc đơn và ngoặc kép có tác dụng như nhau, với ngoặc backstick thì có thể sử dụng để khai báo Template Literals (hoặc Template String). Sử dụng Template Literals với cú pháp
    
         ${expression}
    Ex:

            var name = "Truong",
            team = 'Manchester United';
            alert(`Hello, tôi tên là ${name} và tôi là một fan của ${team} được ${2023-2011} năm rồi)
            ==> Hello, tôi tên là Truong và tôi là một fan của Manchester United được 12 năm rồi
4. boolean : kiểu logic
    
    Chỉ có 2 giá trị là true và false, boolean đại diện cho các giá trị logic. Các giá trị khác có thể chuyển thành boolean qua lệnh:

        Boolean(value);
        Nếu value là 0, null, undefined hoặc NaN thì nhận giá trị là false, ngược lại là true
5. null : giá trị rỗng
    
     Là rỗng, không có giá trị hoặc không xác định. Lưu ý rằng typeof null trả về object nên khi muốn xác định một phần tử có phải null hay không thì dùng === (so sánh giá trị và kiểu dữ liệu) thay vì dùng == (so sánh giá trị). Ex:

        var a = null;
        console.log(a===null); ==> true
6. undefined : giá trị chưa được định nghĩa hoặc không có giá trị
   
     Tương tự null, thể hiện một biến được khai báo nhưng không được gán giá trị. Ex:

            var a;
            alert(a); ==> Undefined

7. object
    
    Tất cả các kiểu data trên đều là kiểu data primitive (nguyên thuỷ), chúng thể hiện chính bản thân chúng còn Object thì phức tạp hơn, nó gồm có properties (thuộc tính) và methods(phương thức)

8. symbol

    Dùng dể cá nhân hoá cho Object 


Lệnh **TYPEOF** dùng để kiểm tra kiểu dữ liệu

### **III. INTERACTION** ###
1. alert: 1 hộp thoại thông báo
2. prompt
    
    Hiện 1 hộp thoại yêu cầu user nhập thông tin. Cấu trúc:

        prompt(message, default);
     Trong đó message là thông báo hiển thị trong hộp thoại còn default là giá trị mặc định của thông tin nhập. Value của prompt là giá trị nhập, còn ấn cancel thì value = null.
    
    Ex:

        var age = prompt('How old are you?',100);
        alert(`You are ${age} years old!`);
3. confirm
    
    Cấu trúc:
    
        result = comfirm(question);
    Confirm sẽ đưa ra một hộp thoại chứa câu hỏi kèm 2 nút OK và Cancel. Nhấn OK cho giá trị true, Cancel cho false

    Ex:

        var isHandsome=confirm('Are you handsome?');
        alert(isHandsome);
