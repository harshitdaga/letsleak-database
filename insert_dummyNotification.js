function insertNotification(){
	var postLike = {
	    "_id" : "mHQApcZQQGtAwenfc",
	    "f_userId" : "testaccount_1",
	    "f_type" : {
	        "f_name" : "POST_LIKE",
	        "f_action" : "ADD"
	    },
	    "f_message" : {
	        "f_postId" : "sf53c712aadebe2466b35cc937",
	        "f_post_message" : "The continuing tragedy is that of four million Palestinians, for whom the only country which could m...",
	        "f_post_like_count" : 2,
	        "f_event_timestamp" : 1405883501866
	    },
	    "f_timestamp" : 1405883501993,
	    "f_archived" : false,
	    "f_notify_type" : "INSTANT"
	};
	db.c_notification_instant.insert(postLike);	


	db.c_notification_instant.insert({
	    "_id" : "PyaiqTArCAmHATsQ7",
	    "f_userId" : "testaccount_1",
	    "f_type" : {
	        "f_name" : "POST_COMMENT",
	        "f_action" : "ADD"
	    },
	    "f_message" : {
	        "f_postId" : "sf53c712aadebe2466b35cc937",
	        "f_post_message" : "The continuing tragedy is that of four million Palestinians, for whom the only country which could m...",
	        "f_comment_type" : "public",
	        "f_event_timestamp" : 1405883958104
	    },
	    "f_timestamp" : 1405883958213,
	    "f_archived" : false,
	    "f_notify_type" : "INSTANT"
	});		

	db.c_notification_instant.insert({
	    "_id" : "MuAZq9X7KTm2huyTc",
	    "f_userId" : "testaccount_1",
	    "f_type" : {
	        "f_name" : "POST_ADDED_TO_BUCKET",
	        "f_action" : null
	    },
	    "f_message" : {
	        "f_postId" : "ggds6AjP6hvdD4LTk",
	        "f_post_message" : "some text by user to show some thing new",
	        "f_bucket_id" : "tb53c713b1debe2466b35cc944",
	        "f_bucket_name" : "public bucket",
	        "f_event_timestamp" : 1405884321792
	    },
	    "f_timestamp" : 1405884321898,
	    "f_archived" : false,
	    "f_notify_type" : "INSTANT"
	});

	db.c_notification_instant.insert({
	    "_id" : "zXR8kXADzfvyknXEx",
	    "f_userId" :  "testaccount_1",
	    "f_type" : {
	        "f_name" : "POST_ADDED_TO_BUCKET",
	        "f_action" : null
	    },
	    "f_message" : {
	        "f_postId" : "ggds6AjP6hvdD4LTk",
	        "f_post_message" : "some text by user to show some thing new",
	        "f_bucket_id" : "tb53c713b1debe2466b35cc944",
	        "f_bucket_name" : "public bucket",
	        "f_event_timestamp" : 1405884321792
	    },
	    "f_timestamp" : 1405884321898,
	    "f_archived" : false,
	    "f_notify_type" : "INSTANT"
	});

	db.c_notification_instant.insert({
	    "_id" : "pgnnmxkGsR8rnzz4u",
	    "f_userId" : "testaccount_1",
	    "f_type" : {
	        "f_name" : "REPORT_ABUSE",
	        "f_action" : "ADD"
	    },
	    "f_message" : {
	        "f_postId" : "sf53c712aadebe2466b35cc914",
	        "f_post_message" : "The April 23 decision by Hamas and Fatah, the Palestine Liberation Organisation, to unite with a vie...",
	        "f_reason_code" : "M_1",
	        "f_event_timestamp" : 1405915887510
	    },
	    "f_timestamp" : 1405915887612,
	    "f_archived" : false,
	    "f_notify_type" : "INSTANT"
	});

	db.c_notification_instant.insert({
	    "_id" : "pgnnmxkGsR8rnzz4a",
	    "f_userId" : "testaccount_1",
	    "f_type" : {
	        "f_name" : "REPORT_ABUSE",
	        "f_action" : "ADD"
	    },
	    "f_message" : {
	        "f_postId" : "sf53c712aadebe2466b35cc914",
	        "f_post_message" : "The April 23 decision by Hamas and Fatah, the Palestine Liberation Organisation, to unite with a vie...",
	        "f_reason_code" : "M_2",
	        "f_event_timestamp" : 1405915887510
	    },
	    "f_timestamp" : 1405915887612,
	    "f_archived" : false,
	    "f_notify_type" : "INSTANT"
	});

	db.c_notification_instant.insert({
	    "_id" : "pgnnmxkGsR8rnzz4b",
	    "f_userId" : "testaccount_1",
	    "f_type" : {
	        "f_name" : "REPORT_ABUSE",
	        "f_action" : "ADD"
	    },
	    "f_message" : {
	        "f_postId" : "sf53c712aadebe2466b35cc914",
	        "f_post_message" : "The April 23 decision by Hamas and Fatah, the Palestine Liberation Organisation, to unite with a vie...",
	        "f_reason_code" : "O_1",
	        "f_event_timestamp" : 1405915887510
	    },
	    "f_timestamp" : 1405915887612,
	    "f_archived" : false,
	    "f_notify_type" : "INSTANT"
	});

	db.c_notification_instant.insert({
	    "_id" : "pgnnmxkGsR8rnzz4c",
	    "f_userId" : "testaccount_1",
	    "f_type" : {
	        "f_name" : "REPORT_ABUSE",
	        "f_action" : "ADD"
	    },
	    "f_message" : {
	        "f_postId" : "sf53c712aadebe2466b35cc914",
	        "f_post_message" : "The April 23 decision by Hamas and Fatah, the Palestine Liberation Organisation, to unite with a vie...",
	        "f_reason_code" : "O_2",
	        "f_event_timestamp" : 1405915887510
	    },
	    "f_timestamp" : 1405915887612,
	    "f_archived" : false,
	    "f_notify_type" : "INSTANT"
	});

};

insertNotification()