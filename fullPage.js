const seccionesPagina = new fullpage('#fullPage',{    
    // Barra de navegación - Navigation bar
    menu: '#menu',
    //navigation: true,
    //navigationPosition: 'left',
    anchors: ['home', 'about_me', 'skills', 'my_portfolio', 'contact_me'],
    navigationTooltips: ['Home', 'About me', 'Skills', 'My Portfolio', 'Contact me'],
    //showActiveTooltip: true,
    controlArrows: false,
});


function moveSlideLeft(section){
    fullpage_api.moveSlideLeft();
}
function moveSlideRight(section){
    fullpage_api.moveSlideRight();
}