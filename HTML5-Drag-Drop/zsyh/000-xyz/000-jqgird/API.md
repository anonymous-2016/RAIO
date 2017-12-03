## jqGrid|初始化|参数



> 名称  类型    描述  默认值   可修改

```js
url string   获取数据的地址
datatype    string  从服务器端返回的数据类型，默认xml。可选类型：xml，local，json，jsonnp，script，xmlstring，jsonstring，clientside
mtype   string ajax提交方式。POST或者GET，默认GET
colNames    Array   列显示名称，是一个数组对象
colModel    Array   常用到的属性：name 列显示的名称；index 传到服务器端用来排序用的列名称；width 列宽度；align 对齐方式；sortable 是否可以排序
pager   string 定义翻页用的导航栏，必须是有效的html元素。翻页工具栏可以放置在html页面任意位置
rowNum  int   在grid上显示记录条数，这个参数是要被传递到后台
rowList array    一个下拉选择框，用来改变显示记录数，当选择时会覆盖rowNum参数传递到后台
sortname    string  默认的排序列。可以是列名称或者是一个数字，这个参数会被提交到后台
viewrecords boolean  定义是否要显示总记录数
caption string   表格名称
[a1]    object 对ajax参数进行全局设置，可以覆盖ajax事件 null 是
[a2]    object 对ajax的select参数进行全局设置 null 是
altclass    String  用来指定行显示的css，可以编辑自己的css文件，只有当altRows设为 ture时起作用    ui-priority-secondary
altRows boolean  设置表格 zebra-striped 值
autoencode  boolean   对url进行编码   false  是
autowidth   boolean    如果为ture时，则当表格在首次被创建时会根据父元素比例重新调整表格宽度。如果父元素宽度改变，为了使表格宽度能够自动调整则需要实现函数：setGridWidth    false   否
cellLayout  integer   定义了单元格padding + border 宽度。通常不必修改此值。初始值为    5   是
cellEdit    boolean 启用或者禁用单元格编辑功能    false   是
cellsubmit  String    定义了单元格内容保存位置    ‘remote’    是
cellurl String   单元格提交的url  空值    是
datastr String   xmlstring或者jsonstring  空值    是
deselectAfterSort   boolean    只有当datatype为local时起作用。当排序时不选择当前行    true    是
direction   string 表格中文字的显示方向，从左向右（ltr）或者从右向左（rtr）  ltr   否
editurl string   定义对form编辑时的url 空值   是
emptyrecords    string  当返回的数据行数为0时显示的信息。只有当属性 viewrecords 设置为ture时起作用        是
ExpandColClick  boolean   当为true时，点击展开行的文本时，treeGrid就能展开或者收缩，不仅仅是点击图片    true    否
ExpandColumn    string  指定那列来展开tree grid，默认为第一列，只有在treeGrid为true时起作用  空值    否
[a3]    boolean    当为true时，会在翻页栏之上增加一行 false    否
forceFit    boolean 当为ture时，调整列宽度不会改变表格的宽度。当shrinkToFit 为false时，此属性会被忽略  false 否
gridstate   string 定义当前表格的状态：'visible' or 'hidden'  visible   否
gridview    boolean 构造一行数据后添加到grid中，如果设为true则是将整个表格的数据都构造完成后再添加到grid中，但treeGrid, subGrid, or afterInsertRow 不能用  false 是
height  mixed 表格高度，可以是数字，像素值或者百分比  150   否
hiddengrid  boolean   当为ture时，表格不会被显示，只显示表格的标题。只有当点击显示表格的那个按钮时才会去初始化表格数据。    false   否
hidegrid    boolean 启用或者禁用控制表格显示、隐藏的按钮，只有当caption 属性不为空时起效   true   否
hoverrows   boolean    当为false时mouse hovering会被禁用  false 是
jsonReader  array 描述json 数据格式的数组      否
lastpage    integer 只读属性，定义了总页数  0 否
lastsort    integer 只读属性，定义了最后排序列的索引，从0开始    0   否
loadonce    boolean 如果为ture则数据只从服务器端抓取一次，之后所有操作都是在客户端执行，翻页功能会被禁用 false    否
loadtext    string  当请求或者排序时所显示的文字内容  Loading....   否
loadui  string    当执行ajax请求时要干什么。disable禁用ajax执行提示；enable默认，当执行ajax请求时的提示； block启用Loading提示，但是阻止其他操作  enable    是
multikey    string  只有在multiselect设置为ture时起作用，定义使用那个key来做多选。shiftKey，altKey，ctrlKey   空值 是
multiboxonly    boolean 只有当multiselect = true.起作用，当multiboxonly 为ture时只有选择checkbox才会起作用  false 是
multiselect boolean  定义是否可以多选  false 否
multiselectWidth    integer 当multiselect为true时设置multiselect列宽度   20 否
page    integer 设置初始的页码  1 是
pagerpos    string  指定分页栏的位置  center    否
pgbuttons   boolean    是否显示翻页按钮    true    否
pginput boolean  是否显示跳转页面的输入框  true  否
pgtext  string    当前页信息      是
prmNames    array   Default valuesprmNames: {page:“page”,rows:“rows”, sort: “sidx”,order: “sord”, search:“_search”, nd:“nd”, npage:null} 当参数为null时不会被发到服务器端    none    是
postData    array   此数组内容直接赋值到url上，参数类型：{name1:value1…}    空array  是
reccount    integer 只读属性，定义了grid中确切的行数。通常情况下与records属性相同，但有一种情况例外，假如rowNum=15，但是从服务器端返回的记录数是20，那么records值是20，但reccount值仍然为15，而且表格中也只显示15条记录。 0    否
recordpos   string 定义了记录信息的位置： left, center, right  right 否
records integer  只读属性，定义了返回的记录数    none    否
recordtext  string    显示记录数信息。{0} 为记录数开始，{1}为记录数结束。viewrecords为ture时才能起效，且总记录数大于0时才会显示此信息


resizeclass string   定义一个class到一个列上用来显示列宽度调整时的效果    空值  否
rowList array    一个数组用来调整表格显示的记录数，此参数值会替代rowNum参数值传给服务器端。    []  否
rownumbers  boolean   如果为ture则会在表格左边新增一列，显示行顺序号，从1开始递增。此列名为'rn'. false    否
rownumWidth integer  如果rownumbers为true，则可以设置column的宽度  25    否
savedRow    array   只读属性，只用在编辑模式下保存数据  空值    否
scroll  boolean   创建一个动态滚动的表格，当为true时，翻页栏被禁用，使用垂直滚动条加载数据，且在首次访问服务器端时将加载所有数据到客户端。当此参数为数字时，表格只控制可见的几行，所有数据都在这几行中加载 false    否
scrollOffset    integer 设置垂直滚动条宽度    18  否
scrollrows  boolean   当为true时让所选择的行可见    false   是
selarrrow   array  只读属性，用来存放当前选择的行   array  否
selrow  string    只读属性，最后选择行的id   null   否
shrinkToFit boolean  此属性用来说明当初始化列宽度时候的计算类型，如果为ture，则按比例初始化列宽度。如果为false，则列宽度使用colModel指定的宽度 true 否
sortable    boolean 是否可排序    false   否
sortname    string  排序列的名称，此参数会被传到后台  空字符串  是
sortorder   string 排序顺序，升序或者降序（asc or desc） asc  是
subGrid boolean  是否使用suggrid   false  否
subGridModel    array   subgrid模型  array 否
subGridType mixed    如果为空则使用表格的dataType  null  是
subGridUrl  string    加载subgrid数据的url，jqGrid会把每行的id值加到url中    空值  是
subGridWidth    integer subgrid列的宽度  20    否
toolbar array    表格的工具栏。数组中有两个值，第一个为是否启用，第二个指定工具栏位置（相对于body layer），如：[true,”both”] 。工具栏位置可选值：“top”,”bottom”, “both”. 如果工具栏在上面，则工具栏id为“t_”+表格id；如果在下面则为 “tb_”+表格id；如果只有一个工具栏则为 “t_”+表格id  [false,'']    否
totaltime   integer    只读属性，计算加载数据的时间。目前支持xml跟json数据   0  否
treedatatype    mixed   数据类型，通常情况下与datatype相同，不会变  null  否
treeGrid    boolean 启用或者禁用treegrid模式 false    否
treeGridModel   string treeGrid所使用的方法   Nested 否
treeIcons   array  树的图标，默认值：{plus:'ui-icon-triangle-1-e',minus:'ui-icon-triangle-1-s',leaf:'ui-icon-radio-off'}    否
treeReader  array 扩展表格的colModel且加在colModel定义的后面        否
tree_root_level numeric  r oot元素的级别，   0  否
userData    array   从request中取得的一些用户信息 array    否
userDataOnFooter    boolean 当为true时把userData放到底部，用法：如果userData的值与colModel的值相同，那么此列就显示正确的值，如果不等那么此列就为空    false   是
viewrecords boolean  是否要显示总记录数 false    否
viewsortcols    array   定义排序列的外观跟行为。数据格式：[false,'vertical',true].第一个参数是说，是否都要显示排序列的图标，false就是只显示 当前排序列的图标；第二个参数是指图标如何显示，vertical：排序图标垂直放置，horizontal：排序图标水平放置；第三个参数指单击功 能，true：单击列可排序，false：单击图标排序。说明：如果第三个参数为false则第一个参数必须为ture否则不能排序      否
width   number 如果设置则按此设置为主，如果没有设置则按colModel中定义的宽度计算 none 否
xmlReader   array  对xml数据结构的描述      否


```

