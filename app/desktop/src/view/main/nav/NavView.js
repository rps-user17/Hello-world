const masterPanel = Ext.create('Ext.panel.Panel', 
{
    renderTo: Ext.getBody(),
    width : 400,
    height : 200,
    layout:'auto',
    items:[{
        xtype:'panel',
        title:'Child Panel 1',
        height:100,
        columWidth:0.5
    },{
        xtype:'panel',
        title:'Child Panel 2',
        height:100,
        columWidth:0.5

    }

    ]
});






Ext.define('HelloWorld.view.main.nav.NavView', {
    extend: 'Ext.Panel',
    xtype: 'navview',
    controller: "navviewcontroller",
    cls: 'navview',
    viewModel: {},
    layout: 'fit',
    tbar: {xtype: 'topview', height: 50},
    items: [ 
        {
            xtype: 'menuview', 
            reference: 'menuview', 
            bind: {width: '{menuview_width}'}, 
            listeners: { 
                selectionchange: "onMenuViewSelectionChange"
            }
        }
    ],
    bbar: {xtype: 'bottomview', bind: {height: '{bottomview_height}'}}
});
