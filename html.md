### **Git Hub Commands**

`git add .`
--> Add tất cả những thay đổi vào service

`git commit -m 'phong dang ahihi'`
--> Ghi description cho service

`git push origin master`
--> Đẩy service lên nhánh master của cloud

### **Open Preview MDfile**
`Ctrl + Shift V` 

### **HTML** ###
Cấu trúc của mỗi câu lệnh:
Mở thẻ + attribute + = + "value" + đóng thẻ

-------------------------
### **Common Elements** ###
<ol>
<li>h1-h6: header</li>
<li>p: paragraph</li>
<li>img</li>
<li>a</li>
<li>ul, ol</li>
<li>table</li>
<li>input</li>
<li>button</li>
<li>div</li>
</ol>

#### **1,2,3,4,7,8. SKIP** ###
-------------------
#### **5. LIST:**
*List đánh số thứ tự: `<ol>`

*List ko đánh số thứ tự: `<ul>`
Mở đầu bằng thẻ `<ul>`, mỗi item mở đầu bằng thẻ `<li>`
Trong mỗi item của list có thể chứa các list khác:
	Ví dụ:

		<ul>
		<li> Cà phơ 
			<ul>
			<li> Cà phơ sữa</li >
			<li> Cà phơ đen</li>
			</ul>
		<li>
		<li> Trà</li>
		</ul>

*List có mô tả gồm: 
`<dl>` description list (tên của list), 
`<dt>` description the term (tên từng item) 
	và `<dd>` descible list (mô tả của từng item)

***Ex:***

		TRÀ --> dl
	Trà sen vàng --> dt
		-trà + hạt sen --> dd
	Trà thạch đào --> dt
		-trà + thạch đào --> dd
-----------------------------
#### **6. TABLE:**
`th` = table heading (tiêu đề của bảng, nó cũng dùng điều chỉnh thuộc tính 1 cột)
`tr` = table row (thể hiện cái ô trong bảng, nó cũng dùng điều chỉnh thuộc tính 1 hàng)
`td` = table data (nội dung trong ô)
Để merge các cột với nhau dùng colspan="số lượng cột merge"
Để merge các hàng với nhau dùng rowspan="số lượng hàng merge"

### **LINK** ###
Dùng: 

	target="_blank" 
để dẫn link, mở ra bằng tab mới

### **CLASS** ###
HTML: 

	<element class="Classname"> Content </element>

CSS:

	.Classname{ CSS }

Multi class:

	<element class="Classname1 Classname2"> Content </element>

==> Giờ có thể CSS cả Classname 1 và Classname2 thì Content sẽ nhận CSS của cả 2

Multi elements-one class:
Các element khác nhau khi có chung tên class thì khi CSS class đó các element sẽ nhận cùng hiệu ứng

### **ID** ###
HTML: 

	<element id="IDname"> Content </element>

CSS:

	#IDname{ CSS }

### **FORM** ###
Các type cho input: https://www.w3schools.com/html/html_form_input_types.asp






