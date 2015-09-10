
//var database = "leak";
//var db = connect("localhost:27017/"+database);

/*
	testaccount_1 / abc!12345
	testaccount_2 / abc!12345

	pin : 123123
*/
function createTestUsers(){
	db.c_user.remove({"_id" : "testaccount_1"});
	db.c_user.remove({"_id" : "testaccount_2"});
	db.c_user.remove({"_id" : "testaccount_3"});
	var testAccount ={
		    "_id" : "testaccount_1",
		    "password" : "$2a$10$Sf.n2KatqyRrUlHq1YxOh.EOfVYfqEXy5FLNsQQBE/jl/MGO5quT2",
    		"pin" : "$2a$10$PeLeKVQdlTZOQBxEFyw04u.712Pq5MeKwDWNrP8UEhtyJWt0S1bwu"
		};
	db.c_user.insert(testAccount);
	testAccount._id = "testaccount_2";
	db.c_user.insert(testAccount);
	testAccount._id = "testaccount_3";
	db.c_user.insert(testAccount);

};

createTestUsers();
