let navbar = () => {
  return `<div id = "fixed">
        <div class="header">
            <section class=header-main>
                <section class="header-left">
                    <div class="header-logo">
                        <img src="https://img.shop.com/Image/resources/logos/shop-logo-us.svg" alt="">
                    </div>
                    <div class="header-menu-button">
                        <div class="header-menu-logo">
                            <img src="https://img.shop.com/Image/resources/images/icon-menu-24px.svg" alt="">
                            <span id="header-menu-title">Categories</span>
                        </div>
                      
                    </div>
                </section>
                <section class="header-right">
                    <div class="header-right-top">
                        <div class="header-right-top-left">
                           <div class="search-product">
                            <div class="all-departments">All Departmrnts <span><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down">
                            <polyline points="6 9 12 15 18 9"></polyline>
                            </svg></span></div>
                            <div id="input-line"></div>
                            <input style = "width: 480px;" type="text" id="input" placeholder="Search SHOP.COM">
                            <button class="js-search-button header-search__button"><img class="header-search__button-icon"src="https://img.shop.com/Image/resources/images/icon-search-24px.svg" alt="Search"></button>
                           </div>
                        </div>
                        <div class="header-right-top-right">
                            <img id="imng" src="https://img.shop.com/Image/header2013/shop-usa-93246-bitpay-300x501631650583136.svg" alt="">
                        </div>
                    </div>
                    <div class="header-right-bottom">
                        <div class="header-right-bottom-left">
                            <nav aria-label="Department List">
                                <ul class="header-right-bottom-list">
                                    <li style="margin-left: 20px;"  class="header-right-bottom-item"> <a class="header-right__dept-link" href="">Exclusive
                                            Brands</a> </li>
                                    <li class="header-right-bottom-item"> <a class="header-right__dept-link" href="">Stores</a>
                                    </li>
                                    <li class="header-right-bottom-item"> <a class="header-right__dept-link"
                                            href="">Deals</a> </li>
                                    <li class="header-right-bottom-item"> <a class="header-right__dept-link"
                                            href="">SHOP Travel</a> </li>
                                    <li class="header-right-bottom-item"> <a class="header-right__dept-link"
                                            href="">Departments</a> </li>
                                    <li class=""> <a class="header-right__dept-link"
                                            href="">ShopBuddy</a> </li>
                                    <li class="header-right-bottom-item"> <a class="header-right__dept-link"
                                            href="">Locals</a> </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="header-right-bottom-right">
                            <div class=header-right-bottom-right-logo>
                                <img src="https://img.shop.com/Image/resources/images/icon-account-circle-24px.svg" alt="">
                                <span>SignIn</span>
                            </div>
                            <div class=header-right-bottom-right-logo>
                                <img src="https://img.shop.com/Image/resources/images/icon-orders-24px.svg" alt="">
                                <span>Orders</span>
                            </div>
                            <div class="header-right-bottom-right-logo">
                                <img src="https://img.shop.com/Image/resources/images/icon-shopping-cart-24px.svg" alt="">
                                <span>Cart</span>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    </div>
        <div class="mini-nav">
        <div>Your Shop Consultent is <a  class = "heavy" href="">SHOP.COM</a> <span><div class="mini-nav2">
            <div class = "mini-nav-right">
                <p class = "thin">Earn up to <span class = "heavy">50% <span><img class="dollor"
                                src="https://img.shop.com/Image/resources/images/cashback-icon.svg" alt=""><span class = "heavy">  Cashback  </span><span class = "thin">on eligible purchases. <a class = "heavy" href="">Learn More</a></span></span></span></p>
            </div>
        </div></span></div>
    </div>`;
};

export default navbar;
