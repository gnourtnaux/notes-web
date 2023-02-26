###Git Hub Commands
`git add .`
--> Add tất cả những thay đổi vào service

`git commit -m 'phong dang ahihi'`
--> Ghi description cho service

`git push origin master`
--> Đẩy service lên nhánh master của cloud

###HTML
Cấu trúc của mỗi câu lệnh:
Mở thẻ + attribute + = + "value" + đóng thẻ

1.	TABLE:
th = table heading (tiêu đề của bảng, nó cũng dùng điều chỉnh thuộc tính 1 cột)
tr = table row (thể hiện cái ô trong bảng, nó cũng dùng điều chỉnh thuộc tính 1 hàng)
td = table data (nội dung trong ô)
Để merge các cột với nhau dùng colspan="số lượng cột merge"
Để merge các hàng với nhau dùng rowspan="số lượng hàng merge"

2.	LIST:
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
Ví dụ:		
		TRÀ --> dl
	Trà sen vàng --> dt
		-trà + hạt sen --> dd
	Trà thạch đào --> dt
		-trà + thạch đào --> dd





