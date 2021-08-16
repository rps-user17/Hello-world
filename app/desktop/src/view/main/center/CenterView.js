Ext.define('HelloWorld.view.main.center.CenterView', {
	extend: 'Ext.Container',
	xtype: 'centerview',
	cls: 'centerview',
	layout: 'card',

	items : [
		{
			xtype : 'panel',
			fullscreen :true,
			//layout:'hbox',
			defaultType : 'textfield',
			defaults:{
				flex:1
			},
			items:[
				{
					html:'User Form',
					Style : 'background-color:white'
				},
				{
					fieldLabel: 'First Name',
					name: 'firstName'
				},
				{
					fieldLabel: 'Last Name',
					name: 'lastName'
				},
				{
					xtype: 'datefield',
					fieldLabel: 'Date of Birth',
					name: 'birthDate'
				},
				{
					xtype: 'button',
					text:'submit',
					handler : function(){
					console.log('User Form Submitted!!');
					Ext.Ajax.request({
						url:'http://localhost:3000/posts',
						method:'DELETE',
						//jsonData :{
						//	name:'Tamilmaran',
						//	id : 5
						//},
						success: function(response)
						{
							Ext.Msg.alert("Success");
						},
						failure: function(response)
						{
							Ext.Msg.alert("Failed");
						}
					})}
				}

					
				
			]
			
			
		}
	]
});
