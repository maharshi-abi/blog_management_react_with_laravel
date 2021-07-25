import React from 'react';

export default function BlogGrid(props) {
    return (
        <React.Fragment>
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="trending__product">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8 col-sm-8">
                                        <div className="section-title">
                                            <h4>Live Action</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="btn__all">
                                            <a href="#" className="primary-btn">View All <span className="arrow_right"></span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="product__item">
                                            <div className="product__item__pic set-bg" style={{backgroundImage:"url(../img/live/live-1.jpg)"}}>
                                                <div className="ep">18 / 18</div>
                                                <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                                <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                            </div>
                                            <div className="product__item__text">
                                                <ul>
                                                    <li>Active</li>
                                                    <li>Movie</li>
                                                </ul>
                                                <h5><a href="#">Shouwa Genroku Rakugo Shinjuu</a></h5>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="product__sidebar">
                                <div className="product__sidebar__view">
                                    <div className="section-title">
                                        <h5>Top Views</h5>
                                    </div>
                                    <ul className="filter__controls">
                                        <li className="active" data-filter="*">Day</li>
                                        <li data-filter=".week">Week</li>
                                        <li data-filter=".month">Month</li>
                                        <li data-filter=".years">Years</li>
                                    </ul>
                                    <div className="filter__gallery">
                                        <div className="product__sidebar__view__item set-bg mix day years" style={{backgroundImage:"url(../img/sidebar/tv-1.jpg)"}}>
                                        <div className="ep">18 / ?</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                        <h5><a href="#">Boruto: Naruto next generations</a></h5>
                                    </div>                                    
                            </div>
                        </div>
                        <div className="product__sidebar__comment">
                            <div className="section-title">
                                <h5>New Comment</h5>
                            </div>
                            <div className="product__sidebar__comment__item">
                                <div className="product__sidebar__comment__item__pic">
                                    <img src="../img/sidebar/comment-1.jpg" alt=""/>
                                </div>
                                <div className="product__sidebar__comment__item__text">
                                    <ul>
                                        <li>Active</li>
                                        <li>Movie</li>
                                    </ul>
                                    <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                                    <span><i className="fa fa-eye"></i> 19.141 Viewes</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </div>
            </div>
          </section>      
        </React.Fragment>
    );
}