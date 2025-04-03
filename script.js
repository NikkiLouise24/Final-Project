
window.onload = function() {
  
    
    let buttons = document.querySelectorAll('.add-cart');
    let cartBtn = document.getElementById('cart');
    let itemCount = 0;
    
    buttons.forEach(btn => {
      btn.onclick = function(e) {
        e.stopPropagation();
        itemCount++;
        
       
        let note = document.createElement('div');
        note.style.position = 'fixed';
        note.style.top = '15px';
        note.style.right = '15px';
        note.style.background = '#6a1b9a';
        note.style.color = 'white';
        note.style.padding = '8px 12px';
        note.style.borderRadius = '4px';
        note.style.zIndex = '100';
        note.style.opacity = '0';
        note.textContent = 'Added to cart';
        
        document.body.appendChild(note);
        
       
        setTimeout(function() {
          note.style.opacity = '1';
        }, 10);
        
        setTimeout(function() {
          note.style.opacity = '0';
        }, 1500);
        
        setTimeout(function() {
          document.body.removeChild(note);
        }, 2000);
        
        
        cartBtn.style.transform = 'scale(1.2)';
        setTimeout(function() {
          cartBtn.style.transform = 'scale(1)';
        }, 300);
      };
    });
    
   
    let quickBtns = document.querySelectorAll('.quick-btn');
    
    quickBtns.forEach(btn => {
      btn.onclick = function() {
        let prod = this.closest('.product');
        let name = prod.querySelector('.prod-name').textContent;
        let price = prod.querySelector('.curr-price').textContent;
        
       
        let popup = document.createElement('div');
        popup.style.position = 'fixed';
        popup.style.top = '0';
        popup.style.left = '0';
        popup.style.width = '100%';
        popup.style.height = '100%';
        popup.style.background = 'rgba(0,0,0,0.7)';
        popup.style.display = 'flex';
        popup.style.justifyContent = 'center';
        popup.style.alignItems = 'center';
        popup.style.zIndex = '100';
        
        
        let content = document.createElement('div');
        content.style.background = 'white';
        content.style.maxWidth = '650px';
        content.style.width = '90%';
        content.style.padding = '20px';
        content.style.borderRadius = '6px';
        content.style.position = 'relative';
        
        
        let close = document.createElement('div');
        close.textContent = '×';
        close.style.position = 'absolute';
        close.style.top = '10px';
        close.style.right = '15px';
        close.style.fontSize = '24px';
        close.style.cursor = 'pointer';
        close.style.color = '#6a1b9a';
        
        content.innerHTML = `
          <h2 style="margin-bottom:15px;color:#6a1b9a">${name}</h2>
          <div style="display:flex;gap:20px;flex-wrap:wrap">
            <div style="flex:1;min-width:200px">
              <img src="/api/placeholder/300/400" alt="${name}" style="width:100%">
            </div>
            <div style="flex:1;min-width:200px">
              <p style="font-size:22px;font-weight:600;color:#6a1b9a;margin-bottom:15px">${price}</p>
              <p style="margin-bottom:15px">Made with premium materials for comfort and style.</p>
              <div style="margin-bottom:15px">
                <p style="margin-bottom:5px">Size:</p>
                <div style="display:flex;gap:10px">
                  <div style="border:1px solid #ddd;padding:5px 10px;cursor:pointer">S</div>
                  <div style="border:1px solid #ddd;padding:5px 10px;cursor:pointer">M</div>
                  <div style="border:1px solid #ddd;padding:5px 10px;cursor:pointer">L</div>
                  <div style="border:1px solid #ddd;padding:5px 10px;cursor:pointer">XL</div>
                </div>
              </div>
              <button style="background:#6a1b9a;color:white;border:none;padding:10px 20px;border-radius:20px;cursor:pointer;width:100%">Add to Cart</button>
            </div>
          </div>
        `;
        
        content.appendChild(close);
        popup.appendChild(content);
        document.body.appendChild(popup);
        
        
        close.onclick = function() {
          document.body.removeChild(popup);
        };
        
        
        popup.onclick = function(e) {
          if (e.target === popup) {
            document.body.removeChild(popup);
          }
        };
      };
    });
    
    
    let catBoxes = document.querySelectorAll('.cat-box');
    
    catBoxes.forEach(box => {
      box.onmouseenter = function() {
        this.querySelector('.cat-name').style.color = '#6a1b9a';
      };
      
      box.onmouseleave = function() {
        this.querySelector('.cat-name').style.color = '#444';
      };
    });
  };