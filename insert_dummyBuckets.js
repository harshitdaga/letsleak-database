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
	    "f_followCount" : 0,
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
	    "f_followCount" : 0,
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

createTestBuckets();