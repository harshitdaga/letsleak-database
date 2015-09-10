
//var database = "leak";
//var db = connect("localhost:27017/"+database);

/*
	testaccount_1 / abc!12345
	testaccount_2 / abc!12345
*/
function createTestUsers(){
	db.c_user.remove({"_id" : "testaccount_1"});
	db.c_user.remove({"_id" : "testaccount_2"});
	var testAccount ={
		    "_id" : "testaccount_1",
		    "pin" : {
		        "identity" : "rZ57YFcE18SEYjr3kOZvmE3GUDeeI_ajRpA1SRAELQJ",
		        "salt" : "xL4ojDvSB-8tJ-wz8MMDLCGTRq00DhCKL3k63TZgjkv",
		        "verifier" : "6f1fa9e41a31f1452d98dd316bf60a8fb2a94be82e450225055b21d91999a18e422358088c3e30e14794da942e0cb98f6495be35f630de21688948b534708e96d8fb829768ba8444e1373263fdf91c0d0377bdf8477545309d4139b5ed5d2e0c9de19a2fe24740e4cca0d81a72efcda03eeecf51b34dedfbbfaca45c1984e4b"
		    },
		    "srp" : {
		        "identity" : "80_NGeVv25vhcEEYg00P5fhZznHbs2Ct7bjsTv4S8bq",
		        "salt" : "quwrU1cdPpeIcPqZe0B1m3tXXkTb5trhhavsxmBuB59",
		        "verifier" : "4c04447d7743bf0ee61b1ef1917618396b54d1e2cc24b1317e3961b31b2b5ea650699af910509348050b48e173b3a67c9333715853b3ee9d878d1db853c6f2cab2e1c0bc4cd6e31b8261ec7c13ba6f038924e8cc23577a84a717ace2bd2247b5ad3fe398e509e5aa1842a3d216df03c7ffcfd9764e08dee79d13939c11c52958"
		    }
		}
	db.c_user.insert(testAccount);
	testAccount._id = "testaccount_2";
	db.c_user.insert(testAccount);
};

function createTestBuckets(){
	
	var publicBucket = {
	    "_id" : "",
	    "f_userId" : "account_1",
	    "f_bucket" : {
	        "f_name" : "public bucket",
	        "f_desc" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	        "f_access" : "PUBLIC",
	        "f_isEditable" : true
	    },
	    "f_timestamp" : new Date().getTime(),
	    "f_lastUpdated" : new Date().getTime(),
	    "f_post_id_list" : [ 
	    ]
	}
	_insertBucket(publicBucket);
	publicBucket.f_bucket.f_name = "public bucket with only author can add post access!";
	publicBucket.f_bucket.f_isEditable  = false;
	_insertBucket(publicBucket);
	

	var privateBucket = {
	    "_id" : "",
	    "f_userId" : "account_1",
	    "f_bucket" : {
	        "f_name" : "private bucket",
	        "f_desc" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	        "f_access" : "PRIVATE",
	        "f_isEditable" : true
	    },
	    "f_timestamp" : new Date().getTime(),
	    "f_lastUpdated" : new Date().getTime(),
	    "f_post_id_list" : [ 
	    ]
	}
	_insertBucket(privateBucket);
	privateBucket.f_bucket.f_name = "private bucket with only author can add post access!";
	publicBucket.f_bucket.f_isEditable  = false;

};

function _insertBucket(dummyBucket){
	dummyBucket.f_userId = "testaccount_1";
	dummyBucket._id = "tb" + new ObjectId().valueOf(),
	db.c_bucket.insert(dummyBucket);
	
	dummyBucket.f_userId = "testaccount_2";
	dummyBucket._id = "tb" + new ObjectId().valueOf(),
	db.c_bucket.insert(dummyBucket);	
}



function fillStatusCollections() {
	var statusArray = ['The April 23 decision by Hamas and Fatah, the Palestine Liberation Organisation, to unite with a view to forming a government in five weeks has rightly refocussed attention on the Israel-Palestine issue.','The two parties have in effect governed, respectively, Gaza and parts of the West Bank since 2006; each has its own security forces, and tensions have been severe.','For example, in the West Bank the Palestinian Authority has cooperated with Israel to arrest and jail members of Hamas and its associate group, the Islamic Jihad.','Secondly, the new pact would involve the recognition of Israel within the 1967 borders, the renunciation of violence, and the acceptance of previous Palestinian-Israeli agreements as well as Fatah-Hamas agreements such as those reached in Cairo in 2011 and Doha in 2012.','Elections are to be held at least six months after the forthcoming talks, to form a new government.','The context, however, remains volatile.','Hamas has consistently refused to recognise Israel, and both Fatah and Hamas face internal problems.','Mahmoud Abbas, whose status as Fatah leader is at best questionable, may feel he needs a mandate from all Palestinians; for his part, Hamas leader Ismail Haniyeh faces an economic and political crisis following the Egyptian military junta’s crackdown on Hamas’s ally, the Muslim Brotherhood; Cairo has also blocked off vital supply tunnels into Gaza, and Mr.','','Haniyeh has little control over militant factions.','The key international reaction, that of the United States, has been predictably one-sided.','President Barack Obama, currently brokering talks which have lasted eight months and were due to conclude this week, says the pact is “unhelpful” and calls for a “pause” in the talks.','Mr.Obama echoes, less aggressively, Israel’s Prime Minister Benjamin Netanyahu, who accuses Fatah of allying with a “murderous terrorist organisation” that wants to destroy Israel.','Tel Aviv, however, also says it cannot deal with a divided Palestinian movement.','Hamas is the elected ruling party of the Palestinian people, having won the 2006 election, but Israel has suspended the talks.','It also continues construction in the West Bank and East Jerusalem, and Hamas’s incapacity to control sub-groups will enable Tel Aviv to continue with collective punishment against Gazans for largely ineffective rocket attacks.','Furthermore, Mr. Netanyahu insists Israel be recognised as a Jewish state; nothing short of that.','The Fatah-Hamas pact may show desperation, but Israel seems to get everything it wants, irrespective of the contradictions therein.','The continuing tragedy is that of four million Palestinians, for whom the only country which could make a difference, the U.S.does nothing.','The April 23 decision by Hamas and Fatah, the Palestine Liberation Organisation, to unite with a view to forming a government in five weeks has rightly refocussed attention on the Israel-Palestine issue.','The two parties have in effect governed, respectively, Gaza and parts of the West Bank since 2006; each has its own security forces, and tensions have been severe.','For example, in the West Bank the Palestinian Authority has cooperated with Israel to arrest and jail members of Hamas and its associate group, the Islamic Jihad.','Secondly, the new pact would involve the recognition of Israel within the 1967 borders, the renunciation of violence, and the acceptance of previous Palestinian-Israeli agreements as well as Fatah-Hamas agreements such as those reached in Cairo in 2011 and Doha in 2012.','Elections are to be held at least six months after the forthcoming talks, to form a new government.','The context, however, remains volatile.','Hamas has consistently refused to recognise Israel, and both Fatah and Hamas face internal problems.','Mahmoud Abbas, whose status as Fatah leader is at best questionable, may feel he needs a mandate from all Palestinians; for his part, Hamas leader Ismail Haniyeh faces an economic and political crisis following the Egyptian military junta’s crackdown on Hamas’s ally, the Muslim Brotherhood; Cairo has also blocked off vital supply tunnels into Gaza, and Mr. Haniyeh has little control over militant factions.','The key international reaction, that of the United States, has been predictably one-sided.','President Barack Obama, currently brokering talks which have lasted eight months and were due to conclude this week, says the pact is “unhelpful” and calls for a “pause” in the talks.','Mr.Obama echoes, less aggressively, Israel’s Prime Minister Benjamin Netanyahu, who accuses Fatah of allying with a “murderous terrorist organisation” that wants to destroy Israel.','Tel Aviv, however, also says it cannot deal with a divided Palestinian movement.','Hamas is the elected ruling party of the Palestinian people, having won the 2006 election, but Israel has suspended the talks.','It also continues construction in the West Bank and East Jerusalem, and Hamas’s incapacity to control sub-groups will enable Tel Aviv to continue with collective punishment against Gazans for largely ineffective rocket attacks.','Furthermore, Mr. Netanyahu insists Israel be recognised as a Jewish state; nothing short of that.','The Fatah-Hamas pact may show desperation, but Israel seems to get everything it wants, irrespective of the contradictions therein.','The continuing tragedy is that of four million Palestinians, for whom the only country which could make a difference, the U.S.does nothing.']
	//var statusArray = ['Some randome status for testing'];
	var color = ["red","blue","green","purple","grey"];
	var colorLen = color.length;
	for(var i=0; i<statusArray.length; i++) {
		// var data = {
		// 	_id : new ObjectId().valueOf(),
		// 	message : statusArray[i],
		// 	categoryList : [1],
		// 	timeStamp : new Date().getTime(),
		// 	isCommentAllowed : true,
		// 	author : "account_1"
		// }

		var data = {
			_id : "sf" + new ObjectId().valueOf(),
	        f_message : statusArray[i],
	        f_categoryList : [1],
	        f_timestamp : new Date().getTime(),
	        f_isCommentAllowed :  true,
	        f_author : "account_1",
	        f_expires : false,
	        f_expiryTime : -1,
	        f_color : color[i%colorLen]
	    };
		db.c_status.insert(data);
	}
};


//createTestUsers();
//createTestBuckets();
//fillStatusCollections();