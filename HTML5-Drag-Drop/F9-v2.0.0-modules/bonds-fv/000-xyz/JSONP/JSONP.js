
// fetch & JSONP
const fetchImages = (debug = false) => {
    const url = `http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?`;
    fetch(url, {
        // method: 'GET',/ no body!
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            tags: "mount rainier",
            tagmode: "any",
            format: "json"
        }),
        // body: {
        //     tags: "mount rainier",
        //     tagmode: "any",
        //     format: "json"
        // },
    })
    .then(res => res.json())
    .then(
        (json) => {
            console.log(`jsonp data =\n`, JSON.stringify(json));
        }
    )
    .catch(err => {
        console.log(`fetch error = \n`, err);
        // no data handler!
    });
};



/*

JSONP & jQuery

http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=jQuery1708548772439896122_1519446422950&tags=mount+rainier&tagmode=any&format=json&_=1519452445963


*/

// IIFE
(function() {
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    // jquery-1.7.min.js && $.getJSON()
    $.getJSON(flickerAPI, {
        tags: "mount rainier",
        tagmode: "any",
        format: "json"
    })
    .done(function(data) {
        console.log(`jsonp data length=\n`, Object.keys(data).length);
        // 6
        console.log(`jsonp data items length=\n`, Object.keys(data.items).length);
        // 20
        console.log(`jsonp data =\n`, JSON.stringify(data));
        // jsonp data = {***}
        // data.items
        $.each(data.items, function(i, item) {
            // item.media
            $("<img>").attr("src", item.media.m).appendTo("#images");
            if (i === 3) {
                // return false;
            }else{
                //
            }
        });
    });
})();


// ready
$(function() {
    // Handler for .ready() called.
    console.log(`.ready() \n`);
    let handler = () => {
        console.log(`handler is ready!`);
    };
    $(handler);
    $(document).ready(handler);
    $("document").ready(handler);
    $("img").ready(handler);
    $().ready(handler);
});


/*

{
    "title":"Recent Uploads tagged mountrainier",
    "link":"http://www.flickr.com/photos/tags/mountrainier/",
    "description":"","modified":"2017-12-10T19:39:11Z",
    "generator":"http://www.flickr.com",
    "items":[
        {
            "title":"Sleepy Rapjohn",
            "link":"http://www.flickr.com/photos/116895768@N03/38966256071/",
            "media":{
                "m":"http://farm5.staticflickr.com/4584/38966256071_369a430844_m.jpg"
            },
            "date_taken":"2017-12-08T10:45:05-08:00",
            "description":"
            <p><a href=\"http://www.flickr.com/people/116895768@N03/\">writing with light 2422 (Not Pro)</a> posted a photo:</p>
            <p><a href=\"http://www.flickr.com/photos/116895768@N03/38966256071/\" title=\"Sleepy Rapjohn\">
            <img src=\"http://farm5.staticflickr.com/4584/38966256071_369a430844_m.jpg\" width=\"240\" height=\"135\" alt=\"Sleepy Rapjohn\" />
            </a></p>
            <p>All was still at Rapjohn Lake, I don't recall hearing a sound. There was no one there to see me, but I probably looked pretty foolish tiptoeing around trying not to break the enchantment. :-) Happy Sunday folks, and thanks for stopping by.</p>",
            "published":"2017-12-10T19:39:11Z",
            "author":"nobody@flickr.com (\"writing with light 2422 (Not Pro)\")",
            "author_id":"116895768@N03",
            "tags":"rapjohnlake mountrainier volcano stratovolcano washingtonstate sonya77 richborder landscape blackandwhite bw monochrome sleepyrapjohn ranch cows reflections"
        },
    {"title":"IMG_5564 Mount Rainier over Nisqually","link":"http://www.flickr.com/photos/jon_d_anderson/24075262527/","media":{"m":"http://farm5.staticflickr.com/4598/24075262527_93f80fdee3_m.jpg"},"date_taken":"2017-12-06T14:40:11-08:00","description":" <p><a href=\"http://www.flickr.com/people/jon_d_anderson/\">Jon. D. Anderson</a> posted a photo:</p> <p><a href=\"http://www.flickr.com/photos/jon_d_anderson/24075262527/\" title=\"IMG_5564 Mount Rainier over Nisqually\"><img src=\"http://farm5.staticflickr.com/4598/24075262527_93f80fdee3_m.jpg\" width=\"240\" height=\"160\" alt=\"IMG_5564 Mount Rainier over Nisqually\" /></a></p> <p>6 December 2017<br /> <br /> Nisqually National Wildlife Refuge, Thurston County, Washington<br /> <br /> <a href=\"http://ebird.org/ebird/pnw/view/checklist/S40956206\" rel=\"nofollow\">ebird.org/ebird/pnw/view/checklist/S40956206</a></p>","published":"2017-12-09T18:28:11Z","author":"nobody@flickr.com (\"Jon. D. Anderson\")","author_id":"94694397@N07","tags":"mountain mountrainier nisquallynationalwildliferefuge estuary"},{"title":"DSC_0852","link":"http://www.flickr.com/photos/through_polas_eyes/25027662088/","media":{"m":"http://farm5.staticflickr.com/4553/25027662088_d1cb1a0d8f_m.jpg"},"date_taken":"2017-12-06T15:18:30-08:00","description":" <p><a href=\"http://www.flickr.com/people/through_polas_eyes/\">pola rica</a> posted a photo:</p> <p><a href=\"http://www.flickr.com/photos/through_polas_eyes/25027662088/\" title=\"DSC_0852\"><img src=\"http://farm5.staticflickr.com/4553/25027662088_d1cb1a0d8f_m.jpg\" width=\"240\" height=\"159\" alt=\"DSC_0852\" /></a></p> ","published":"2017-12-07T20:44:52Z","author":"nobody@flickr.com (\"pola rica\")","author_id":"52176896@N05","tags":"norsepeakwilderness crystalmountain mountrainier snowshoe snow"},{"title":"Thun-Landing-2","link":"http://www.flickr.com/photos/spenceraircraft/38180549854/","media":{"m":"http://farm5.staticflickr.com/4548/38180549854_9c4cf0e91c_m.jpg"},"date_taken":"2017-09-11T05:24:42-08:00","description":" <p><a href=\"http://www.flickr.com/people/spenceraircraft/\">SpencerAircraft</a> posted a photo:</p> <p><a href=\"http://www.flickr.com/photos/spenceraircraft/38180549854/\" title=\"Thun-Landing-2\"><img src=\"http://farm5.staticflickr.com/4548/38180549854_9c4cf0e91c_m.jpg\" width=\"152\" height=\"240\" alt=\"Thun-Landing-2\" /></a></p> <p>Crisp afternoon on the runway</p>","published":"2017-12-07T17:33:22Z","author":"nobody@flickr.com (\"SpencerAircraft\")","author_id":"142591110@N02","tags":"mountrainier"},{"title":"Seattle, Washington","link":"http://www.flickr.com/photos/marguerite-simone/25012962278/","media":{"m":"http://farm5.staticflickr.com/4531/25012962278_14f4ab980c_m.jpg"},"date_taken":"2017-05-03T18:13:22-08:00","description":" <p><a href=\"http://www.flickr.com/people/marguerite-simone/\">marguerite-simone</a> posted a photo:</p> <p><a href=\"http://www.flickr.com/photos/marguerite-simone/25012962278/\" title=\"Seattle, Washington\"><img src=\"http://farm5.staticflickr.com/4531/25012962278_14f4ab980c_m.jpg\" width=\"240\" height=\"160\" alt=\"Seattle, Washington\" /></a></p> ","published":"2017-12-07T04:59:14Z","author":"nobody@flickr.com (\"marguerite-simone\")","author_id":"155021788@N08","tags":"mountrainier seattle washington pugetsound"},{"title":"Seattle, Washington","link":"http://www.flickr.com/photos/marguerite-simone/25012964328/","media":{"m":"http://farm5.staticflickr.com/4572/25012964328_9df5b333ae_m.jpg"},"date_taken":"2017-05-14T00:59:51-08:00","description":" <p><a href=\"http://www.flickr.com/people/marguerite-simone/\">marguerite-simone</a> posted a photo:</p> <p><a href=\"http://www.flickr.com/photos/marguerite-simone/25012964328/\" title=\"Seattle, Washington\"><img src=\"http://farm5.staticflickr.com/4572/25012964328_9df5b333ae_m.jpg\" width=\"180\" height=\"240\" alt=\"Seattle, Washington\" /></a></p> ","published":"2017-12-07T04:59:14Z","author":"nobody@flickr.com (\"marguerite-simone\")","author_id":"155021788@N08","tags":"seattle scenic overlook clouds washington pugetsound mountrainier nature serene"},{"title":"Mount Rainier","link":"http://www.flickr.com/photos/campingroadtrips/38829006092/","media":{"m":"http://farm5.staticflickr.com/4577/38829006092_c07f746546_m.jpg"},"date_taken":"2017-08-28T18:35:05-08:00","description":" <p><a href=\"http://www.flickr.com/people/campingroadtrips/\">beanadri</a> posted a photo:</p> <p><a href=\"http://www.flickr.com/photos/campingroadtrips/38829006092/\" title=\"Mount Rainier\"><img src=\"http://farm5.staticflickr.com/4577/38829006092_c07f746546_m.jpg\" width=\"240\" height=\"104\" alt=\"Mount Rainier\" /></a></p> <p>Me at Mount Rainier<br /> A little hazy due to wildfires nearby</p>","published":"2017-12-05T22:40:42Z","author":"nobody@flickr.com (\"beanadri\")","author_id":"123774735@N07","tags":"mountrainier adrianebean"},{"title":"Ohanapecosh River","link":"http://www.flickr.com/photos/campingroadtrips/37972742585/","media":{"m":"http://farm5.staticflickr.com/4567/37972742585_6636f4ba59_m.jpg"},"date_taken":"2017-08-28T18:51:51-08:00","description":" <p><a href=\"http://www.flickr.com/people/campingroadtrips/\">beanadri</a> posted a photo:</p> <p><a href=\"http://www.flickr.com/photos/campingroadtrips/37972742585/\" title=\"Ohanapecosh River\"><img src=\"http://farm5.staticflickr.com/4567/37972742585_6636f4ba59_m.jpg\" width=\"240\" height=\"160\" alt=\"Ohanapecosh River\" /></a></p> <p>Day Use picnic area in ohanapecosh campground, Mount Rainier National Park</p>","published":"2017-12-05T22:37:51Z","author":"nobody@flickr.com (\"beanadri\")","author_id":"123774735@N07","tags":"mountrainier ohanapecosh"},{"title":"DSC_6476","link":"http://www.flickr.com/photos/through_polas_eyes/38785227992/","media":{"m":"http://farm5.staticflickr.com/4536/38785227992_6fed7370fc_m.jpg"},"date_taken":"2017-08-23T14:53:34-08:00","description":" <p><a href=\"http://www.flickr.com/people/through_polas_eyes/\">pola rica</a> posted a photo:</p> <p><a href=\"http://www.flickr.com/photos/through_polas_eyes/38785227992/\" title=\"DSC_6476\"><img src=\"http://farm5.staticflickr.com/4536/38785227992_6fed7370fc_m.jpg\" width=\"240\" height=\"159\" alt=\"DSC_6476\" /></a></p> ","published":"2017-12-03T21:44:53Z","author":"nobody@flickr.com (\"pola rica\")","author_id":"52176896@N05","tags":"mountrainier tolmiepeak"},{"title":"DSC_7469","link":"http://www.flickr.com/photos/through_polas_eyes/27039911519/","media":{"m":"http://farm5.staticflickr.com/4523/27039911519_6b5f410d85_m.jpg"},"date_taken":"2017-09-22T11:35:31-08:00","description":" <p><a href=\"http://www.flickr.com/people/through_polas_eyes/\">pola rica</a> posted a photo:</p> <p><a href=\"http://www.flickr.com/photos/through_polas_eyes/27039911519/\" title=\"DSC_7469\"><img src=\"http://farm5.staticflickr.com/4523/27039911519_6b5f410d85_m.jpg\" width=\"240\" height=\"159\" alt=\"DSC_7469\" /></a></p> ","published":"2017-12-03T21:44:53Z","author":"nobody@flickr.com (\"pola rica\")","author_id":"52176896@N05","tags":"mountrainier summitlake"},{"title":"Early Digital","link":"http://www.flickr.com/photos/erniemisner/23935908257/","media":{"m":"http://farm5.staticflickr.com/4545/23935908257_50fce896b0_m.jpg"},"date_taken":"2006-12-31T15:16:36-08:00","description":" <p><a href=\"http://www.flickr.com/people/erniemisner/\">Ernie Misner</a> posted a photo:</p> <p><a href=\"http://www.flickr.com/photos/erniemisner/23935908257/\" title=\"Early Digital\"><img src=\"http://farm5.staticflickr.com/4545/23935908257_50fce896b0_m.jpg\" width=\"240\" height=\"160\" alt=\"Early Digital\" /></a></p> <p>One of the first images I took after going digital with my Nikon D200 in 2006. It was New Years Eve and freezing but I just had to get out there. I had been shooting film for 50 years and was pretty clueless about digital but had some luck here with Mt. Rainier and the city of Tacoma, WA. I didn't have many lenses but found an old 200mm macro lens that worked, and an old non-coated polarizer from the film days. I still have the original raw file so this is a re-edit using the b&amp;w conversion in Topaz Studio. It's a bit better than the ones I edited originally (okay, a lot).<br /> <br /> Thank you for your warm and kind visits my friends. You are absolutely the best! :)<br /> <br /> Facebook: Ernie Misner</p>","published":"2017-12-03T07:02:03Z","author":"nobody@flickr.com (\"Ernie Misner\")","author_id":"97170875@N05","tags":"f8anddigoldgear mountrainier lenticularcloud lenticular tacomawa tacoma washington blackandwhite monochrome erniemisner nikond810 nikon d810 nikond200 d200 topazstudio topaz nik capturenx2 cnx2"},{"title":"Mt. Rainier in Washington","link":"http://www.flickr.com/photos/jeffhollettvancouverwa/38763991492/","media":{"m":"http://farm5.staticflickr.com/4539/38763991492_4fa20160c1_m.jpg"},"date_taken":"2017-12-02T15:46:25-08:00","description":" <p><a href=\"http://www.flickr.com/people/jeffhollettvancouverwa/\">Jeff Hollett in Vancouver, WA</a> posted a video:</p> <p><a href=\"http://www.flickr.com/photos/jeffhollettvancouverwa/38763991492/\" title=\"Mt. Rainier in Washington\"><img src=\"http://farm5.staticflickr.com/4539/38763991492_4fa20160c1_m.jpg\" width=\"240\" height=\"240\" alt=\"Mt. Rainier in Washington\" /></a></p> <p>Mount Rainier in Washington in The Pacific Northwest</p>","published":"2017-12-02T23:46:23Z","author":"nobody@flickr.com (\"Jeff Hollett in Vancouver, WA\")","author_id":"50503887@N08","tags":"mountrainier washington pacificnorthwest mountain"},{"title":"Mt. Rainier in Washington","link":"http://www.flickr.com/photos/jeffhollettvancouverwa/37908583035/","media":{"m":"http://farm5.staticflickr.com/4527/37908583035_649f2fbf9c_m.jpg"},"date_taken":"2017-12-02T15:46:26-08:00","description":" <p><a href=\"http://www.flickr.com/people/jeffhollettvancouverwa/\">Jeff Hollett in Vancouver, WA</a> posted a video:</p> <p><a href=\"http://www.flickr.com/photos/jeffhollettvancouverwa/37908583035/\" title=\"Mt. Rainier in Washington\"><img src=\"http://farm5.staticflickr.com/4527/37908583035_649f2fbf9c_m.jpg\" width=\"240\" height=\"240\" alt=\"Mt. Rainier in Washington\" /></a></p> <p>Mount Rainier in Washington in The Pacific Northwest</p>","published":"2017-12-02T23:46:23Z","author":"nobody@flickr.com (\"Jeff Hollett in Vancouver, WA\")","author_id":"50503887@N08","tags":"mountrainier washington pacificnorthwest mountain"},{"title":"Time Lapse of Mt. Rainier in Washington","link":"http://www.flickr.com/photos/jeffhollettvancouverwa/37908566495/","media":{"m":"http://farm5.staticflickr.com/4539/37908566495_214c3be771_m.jpg"},"date_taken":"2017-12-02T15:46:24-08:00","description":" <p><a href=\"http://www.flickr.com/people/jeffhollettvancouverwa/\">Jeff Hollett in Vancouver, WA</a> posted a video:</p> <p><a href=\"http://www.flickr.com/photos/jeffhollettvancouverwa/37908566495/\" title=\"Time Lapse of Mt. Rainier in Washington\"><img src=\"http://farm5.staticflickr.com/4539/37908566495_214c3be771_m.jpg\" width=\"240\" height=\"240\" alt=\"Time Lapse of Mt. Rainier in Washington\" /></a></p> <p>Time Lapse of Mount Rainier in Washington in The Pacific Northwest</p>","published":"2017-12-02T23:46:24Z","author":"nobody@flickr.com (\"Jeff Hollett in Vancouver, WA\")","author_id":"50503887@N08","tags":"mountrainier washington pacificnorthwest mountain"},{"title":"IMG-NT-4359","link":"http://www.flickr.com/photos/thepianistalex/38761326531/","media":{"m":"http://farm5.staticflickr.com/4558/38761326531_d5858f4b62_m.jpg"},"date_taken":"2017-10-28T18:03:19-08:00","description":" <p><a href=\"http://www.flickr.com/people/thepianistalex/\">thepianistalex</a> posted a photo:</p> <p><a href=\"http://www.flickr.com/photos/thepianistalex/38761326531/\" title=\"IMG-NT-4359\"><img src=\"http://farm5.staticflickr.com/4558/38761326531_d5858f4b62_m.jpg\" width=\"240\" height=\"148\" alt=\"IMG-NT-4359\" /></a></p> ","published":"2017-12-01T10:24:01Z","author":"nobody@flickr.com (\"thepianistalex\")","author_id":"34414772@N08","tags":"tacoma mountrainier washington autumn pugetsound landscape water"},{"title":"IMG-NT-4394","link":"http://www.flickr.com/photos/thepianistalex/38044774324/","media":{"m":"http://farm5.staticflickr.com/4572/38044774324_e3ee7bb7d3_m.jpg"},"date_taken":"2017-10-28T18:13:47-08:00","description":" <p><a href=\"http://www.flickr.com/people/thepianistalex/\">thepianistalex</a> posted a photo:</p> <p><a href=\"http://www.flickr.com/photos/thepianistalex/38044774324/\" title=\"IMG-NT-4394\"><img src=\"http://farm5.staticflickr.com/4572/38044774324_e3ee7bb7d3_m.jpg\" width=\"240\" height=\"148\" alt=\"IMG-NT-4394\" /></a></p> ","published":"2017-12-01T10:24:02Z","author":"nobody@flickr.com (\"thepianistalex\")","author_id":"34414772@N08","tags":"tacoma mountrainier washington autumn pugetsound landscape water"},{"title":"IMG_5537 Nisqually estuary and Mt Rainier","link":"http://www.flickr.com/photos/jon_d_anderson/23891680277/","media":{"m":"http://farm5.staticflickr.com/4574/23891680277_f63fc34ce1_m.jpg"},"date_taken":"2017-11-29T14:03:48-08:00","description":" <p><a href=\"http://www.flickr.com/people/jon_d_anderson/\">Jon. D. Anderson</a> posted a photo:</p> <p><a href=\"http://www.flickr.com/photos/jon_d_anderson/23891680277/\" title=\"IMG_5537 Nisqually estuary and Mt Rainier\"><img src=\"http://farm5.staticflickr.com/4574/23891680277_f63fc34ce1_m.jpg\" width=\"240\" height=\"136\" alt=\"IMG_5537 Nisqually estuary and Mt Rainier\" /></a></p> <p>29 November 2017<br /> <br /> Nisqually National Wildlife Refuge, Thurston County, Washington<br /> <br /> <a href=\"http://ebird.org/ebird/pnw/view/checklist/S40820885\" rel=\"nofollow\">ebird.org/ebird/pnw/view/checklist/S40820885</a><br /> <br /> A beautiful view of the mountain on a late fall afternoon.</p>","published":"2017-12-01T04:11:16Z","author":"nobody@flickr.com (\"Jon. D. Anderson\")","author_id":"94694397@N07","tags":"estuary estuaryrestoration mountain mountrainier pugetsound nisquallynationalwildliferefuge"},{"title":"Christine Falls","link":"http://www.flickr.com/photos/photosbyrashid/38742604751/","media":{"m":"http://farm5.staticflickr.com/4549/38742604751_681377594f_m.jpg"},"date_taken":"2017-10-07T19:28:28-08:00","description":" <p><a href=\"http://www.flickr.com/people/photosbyrashid/\">Photos By RM</a> posted a photo:</p> <p><a href=\"http://www.flickr.com/photos/photosbyrashid/38742604751/\" title=\"Christine Falls\"><img src=\"http://farm5.staticflickr.com/4549/38742604751_681377594f_m.jpg\" width=\"160\" height=\"240\" alt=\"Christine Falls\" /></a></p> ","published":"2017-11-30T12:47:31Z","author":"nobody@flickr.com (\"Photos By RM\")","author_id":"89117352@N04","tags":"mountrainier waterfall water christinefalls mountain nature landscape longexposure filter leebigstopper canon washington washingtonstate mountrainiernationalpark park falls"},{"title":"A quiet stroll through Paradise, WA. Mount Rainier National Park.","link":"http://www.flickr.com/photos/99379973@N04/38740454081/","media":{"m":"http://farm5.staticflickr.com/4565/38740454081_6a739c5f15_m.jpg"},"date_taken":"2017-07-29T22:19:48-08:00","description":" <p><a href=\"http://www.flickr.com/people/99379973@N04/\">plottsdaniel</a> posted a photo:</p> <p><a href=\"http://www.flickr.com/photos/99379973@N04/38740454081/\" title=\"A quiet stroll through Paradise, WA. Mount Rainier National Park.\"><img src=\"http://farm5.staticflickr.com/4565/38740454081_6a739c5f15_m.jpg\" width=\"178\" height=\"240\" alt=\"A quiet stroll through Paradise, WA. Mount Rainier National Park.\" /></a></p> ","published":"2017-11-30T10:09:37Z","author":"nobody@flickr.com (\"plottsdaniel\")","author_id":"99379973@N04","tags":"landscapephotography landscape longexposure create travel explore unitedstates america pacificnorthwest seattle pnw volcano nature nikkor nikon mountrainiernationalpark paradise mountrainier"},{"title":"Mount Rainier","link":"http://www.flickr.com/photos/cyberspace/24829871678/","media":{"m":"http://farm5.staticflickr.com/4525/24829871678_14eea61b69_m.jpg"},"date_taken":"2017-07-29T15:52:52-08:00","description":" <p><a href=\"http://www.flickr.com/people/cyberspace/\">wirehead</a> posted a photo:</p> <p><a href=\"http://www.flickr.com/photos/cyberspace/24829871678/\" title=\"Mount Rainier\"><img src=\"http://farm5.staticflickr.com/4525/24829871678_14eea61b69_m.jpg\" width=\"180\" height=\"240\" alt=\"Mount Rainier\" /></a></p> ","published":"2017-11-28T16:01:01Z","author":"nobody@flickr.com (\"wirehead\")","author_id":"42988394@N00","tags":"14150mm em5mk2 mountrainier mountain landscape scenery mountrainiernationalpark"}]}

*/