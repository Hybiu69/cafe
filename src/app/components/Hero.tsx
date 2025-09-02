import "./Hero.css"
export default function Hero(){
    return(
        <section className="hero-section">
            <div className="hero-text">
                <h1 className="hero-title">BEM-VINDOS</h1>
                <h2 className="hero-subtitle">à Quintiliano's Café</h2>
                <h2 className="hero-phrase">A sofisticação dos cafés gourmet que encantam em cada gole</h2>
                <p className="hero-description">Nossos cafés e delícias combinam ingredientes selecionados
                    com um toque artesanal e sofisticado. Uma experiência única em sabor e aroma.</p> 
            </div>
            <div className="hero-image">
                <img src="cafe.png" alt="cafe-croissant"/>
            </div>
        </section>
    )
}