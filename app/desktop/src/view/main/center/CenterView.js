Ext.Ajax.on("beforerequest", function () {
	console.log('before');
});
var store = Ext.create('Ext.data.Store', {
	fields: ['name', 'progress'],
	data: [
		{ name: 'Test 1', progress: 0.10 },
		{ name: 'Test 2', progress: 0.23 },
		{ name: 'Test 3', progress: 0.86 },
		{ name: 'Test 4', progress: 0.31 }
	]
});

var grid1 = Ext.create({
	xtype: 'grid',
	title: 'Widget Column Demo',
	store: store,

	columns: [{
		text: 'Test Number',
		dataIndex: 'name',
		width: 100
	}],

	width: 220,
	height: 250,
});

Ext.define('HelloWorld.view.main.center.CenterView', {
	extend: 'Ext.Container',
	xtype: 'centerview',
	cls: 'centerview',
	layout: 'card',
	items : [grid1]

	// items : [
	// 	{
	// 		xtype : 'panel',
	// 		fullscreen :true,
	// 		//layout:'hbox',
	// 		defaultType : 'textfield',
	// 		defaults:{
	// 			flex:1
	// 		},
	// 		items:[
	// 			{
	// 				html:'User Form',
	// 				Style : 'background-color:white'
	// 			},
	// 			{
	// 				fieldLabel: 'First Name',
	// 				name: 'firstName'
	// 			},
	// 			{
	// 				fieldLabel: 'Last Name',
	// 				name: 'lastName'
	// 			},
	// 			{
	// 				xtype: 'datefield',
	// 				fieldLabel: 'Date of Birth',
	// 				name: 'birthDate'
	// 			},
	// 			{
	// 				xtype: 'button',
	// 				text:'submit',
	// 				handler : function(){
	// 				console.log('User Form Submitted!!');
	// 				Ext.Ajax.on("beforerequest", function()
	// 				{
	// 					console.log('before');
	// 				})
	// 				Ext.Ajax.request({
	// 					url:'http://localhost:3000/posts/2',

	// 					method:'DELETE',
	// 					setTimeout :3000,

	// 					success: function(response)
	// 					{
	// 						Ext.Msg.alert("Success");
	// 					},
	// 					failure: function(response)
	// 					{
	// 						Ext.Msg.alert("Failed");
	// 					}

	// 					//method:'Update',
	// 					//jsonData :{
	// 					//	name:'Tamilmaran',
	// 					//	id : 5
	// 					//},
	// 					// success: function(response)
	// 					// {
	// 					// 	Ext.Msg.alert("Success");
	// 					// },
	// 					// failure: function(response)
	// 					// {
	// 					// 	Ext.Msg.alert("Failed");
	// 					// }
						
	// 				})}
	// 			}

					
				
	// 		]
			
			
	// 	}
	// ]



	
});
