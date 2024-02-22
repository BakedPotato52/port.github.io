import React from 'react';
import "./Chip.css"

function Chips() {
  return (
    <div class="chips"> 
        <div class="chips_item chips_item--selected">
            All
        </div>
        <div class="chips_item">
            Wordpress
        </div>
        <div class="chips_item">
            Bootstrap
        </div>
        <div class="chips_item">
            Shopify
        </div>
        <div class="chips_item">
            Magento
        </div>
        <div class="chips_item">
            ReactJs
        </div>
        <div class="chips_item">
            Angular Js
        </div>
    </div>
  )
}

export default Chips;
