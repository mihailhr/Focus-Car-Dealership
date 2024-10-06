import "./Home.css"

export default function Home(){
    return <div id="home">
        <section id="start">
            <article>
                <h1>Buy the car you've always wanted</h1>
                <p>Easier and quicker than ever</p>
            </article>
            
            
        </section>
        <div id="procedure">
            <h1>What is the procedure like?</h1>
        </div>
        <div id="steps">
                <ul>
                    <li><h3><span>1</span> Selection</h3><p>Our specialists will help you choose the most suitable vehicle that meets your budget and requirements. Request a free consultation, and we will send you 5 cars based on your budget and preferences.</p></li>
                    <li><h3><span>2</span> Cost calculation</h3><p>Before proceeding with the purchase, we will assess all costs associated with repairs, acquisition, transportation, and delivery to your location.</p></li>
                    <li><h3><span>3</span> Auction</h3><p>We have a registered company in Canada/USA and all the necessary licenses to participate in online auctions at Copart and IAAI.</p></li>
                    <li><h3><span>4</span> Payment</h3><p>Payment is made within 24 hours via SWIFT bank transfer to the account of Copart or IAAI in the USA/Canada, ensuring the security of the transaction.</p></li>
                    <li><h3><span>5</span> Delivery</h3><p>Delivery takes between 30 and 60 days and includes transport from a Copart or IAAI parking lot to the most suitable port, from which the car will be loaded onto a ship bound for Europe.</p></li>
                    <li><h3><span>6</span> Documentation</h3><p>Our company takes full responsibility for handling all aspects of documentation related to customs, transport companies, and other institutions.</p></li>
                    <li><h3><span>7</span> Repairs</h3><p>We can recommend trusted service centers where you can carry out comprehensive maintenance on your vehicle.</p></li>
                    <li><h3><span>8</span> Finalization</h3><p>With our professional approach, you can save between 25% to 40% off the market value. You will receive your dream car with an accurate mileage and complete service history.</p></li>
                </ul>
            </div>
            <div id="transport">
                <img src="/images/carPurchase.jpg" alt="" />
                <section>
                    <h1>IMPORT OF CARS FROM CANADA AND THE USA</h1>
                    <p>At Focus, we are dedicated to providing comprehensive solutions for the purchase, sale, and delivery of cars. Our commitment to quality vehicles and excellent service drives our continuous growth. We strive for constant improvement and building long-term relationships with our valued customers.</p>
                    <button><Link to="/services">Learn more</Link></button>
                </section>
            </div>
            <div id="currentOffers">
            <section id="sectionLeft">
                <h1>Buy from Auctions with Confidence</h1>
                <p>Search and buy from car auctions in the USA and Canada. Our team provides assistance with registration and bidding at car auctions.</p>
            </section>
            <section id="sectionRight">
                <h1>See the Latest Offers</h1>
                <Link to="/offers"><button>See the Latest Offers</button></Link>
            </section>
            </div>
            <article id="transportExperts">
                <h1>EXPERTS IN TRANSPORTATION</h1>
                <p>We are experts in transporting a wide range of vehicles, serving various needs. Whether you need to transport modern cars, classic cars, boats, motorcycles, tractors, or even special vehicles like jets and agricultural vehicles, our specialized transport services ensure the safe and efficient delivery of your valuable assets.</p>
            </article>
            <section id="chooseUs">
                <h1>WHY CHOOSE US?</h1>
                <ul>
                    <li><i className="fa-solid fa-check"></i><p>Seamless experience</p></li>
                    <li><i className="fa-solid fa-user-tie"></i><p>Expertise</p></li>
                    <li><i className="fa-solid fa-globe"></i><p>Wide geographical coverage</p></li>
                    <li><i className="fa-solid fa-hand-holding-dollar"></i><p>Competitive pricing</p></li>
                    <li><i className="fa-solid fa-star"></i><p>Quality assurance</p></li>
                    <li><i className="fa-solid fa-person"></i><p>Personalized customer service</p></li>
                </ul>
            </section>

    </div>
}