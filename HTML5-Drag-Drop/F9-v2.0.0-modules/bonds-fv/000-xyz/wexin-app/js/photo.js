$(function() {
    //触发input file
    $('#upload_btn').click(function() {
        $('#btn1').trigger('click');
    });

    //图片上传
    var $image = $('.upload-img > img');
    $image.cropper({
        viewMode: 1,
        aspectRatio: 1, //裁剪比例，NaN-自由选择区域
        autoCropArea: 1, //初始裁剪区域占图片比例
        crop: function(data) { //裁剪操作回调
        }
    });
    var fileName; //选择上传的文件名
    $('#btn1').change(function() {
        var file = this.files[0];
        fileName = file.name;
        var reader = new FileReader();
        //reader回调，重新初始裁剪区
        reader.onload = function() {
            // 通过 reader.result 来访问生成的 DataURL
            var url = reader.result;
            //选择图片后重新初始裁剪区
            $image.cropper('reset', true).cropper('replace', url);
        };
        reader.readAsDataURL(file);
    });

    /*
     * 上传图片
     */
    $('#image_save').click(function() {
        var type = $image.attr('src').split(';')[0].split(':')[1];

        var canVas = $image.cropper("getCroppedCanvas", {});
        //将裁剪的图片加载到face_image
        //$('#preview').attr('src', canVas.toDataURL());
        canVas.toBlob(function(blob) {
            var formData = new FormData();
            formData.append("file", blob);
            $.ajax({
                type: "POST",
                url: 'http://nh.gildata.com/photo2.php?action=upload',
                data: formData,
                contentType: false, //必须
                processData: false, //必须
                dataType: "json",
                success: function(data) {
                    $.toast("上传成功");
                    setTimeout("window.location = './me.html';", 2 * 1000);

                },
                error: function(a) {
                    $.toast("上传失败，不如换个图片试试", "cancel");
                }
            });
        }, type);
    });
});
