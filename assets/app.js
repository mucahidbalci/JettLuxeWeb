const IMG_MID = "https://cdn.shopier.app/pictures_mid/jettluxe_";
const IMG_BIG = "https://cdn.shopier.app/scaledoriginal/jettluxe_";
const ICO = {
  ship:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M1 3h13v13H1zM14 8h4l3 4v4h-7"/><circle cx="5.5" cy="19" r="2"/><circle cx="17.5" cy="19" r="2"/></svg>',
  swap:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 8h14l-3-3M21 16H7l3 3"/></svg>',
  shield:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2l8 3v7c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V5z"/><path d="M9 12l2 2 4-4"/></svg>',
  star:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l2.6 5.6 6.1.8-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.4l6.1-.8z"/></svg>',
  heart:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 20s-7-4.4-7-9.3A4.2 4.2 0 0112 7a4.2 4.2 0 017 3.7C19 15.6 12 20 12 20z"/></svg>',
  arr:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
};
const favs = JSON.parse(localStorage.getItem("jl_favs")||"[]");
const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;");

function imgTag(f, alt, big){
  const src = (big ? IMG_BIG : IMG_MID) + f + ".jpeg";
  const fb  = (big ? IMG_MID : IMG_BIG) + f + ".jpeg";
  return '<img src="'+src+'" alt="'+esc(alt)+'" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src=\''+fb+'\'">';
}

function header(active){
  const on = k => k===active ? ' class="on"' : '';
  return '<div class="ann">1500 TL üzeri ücretsiz kargo · değişim mevcut · Shopier güvenli ödeme</div>'+
  '<header><a class="brand" href="/"><img src="'+LOGO+'" alt="JettLuxe"><span><b>JETTLUXE</b><small>Premium</small></span></a>'+
  '<nav class="desk"><a href="/koleksiyon"'+on("koleksiyon")+'>Koleksiyon</a><a href="/hakkimizda"'+on("hakkimizda")+'>Hakkımızda</a>'+
  '<a href="/iletisim"'+on("iletisim")+'>İletişim</a><a href="'+IG+'" target="_blank" rel="noopener">Instagram</a></nav>'+
  '<button class="burger" id="burger" aria-label="Menü"><svg width="17" height="13" viewBox="0 0 17 13" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M0 1h17M0 6.5h17M0 12h17"/></svg></button></header>'+
  '<div class="drawer" id="drawer"><a href="/koleksiyon">Koleksiyon <span>→</span></a><a href="/koleksiyon?kategori=grillz">Grillz <span>→</span></a>'+
  '<a href="/koleksiyon?kategori=cantalar">El çantaları <span>→</span></a><a href="/hakkimizda">Hakkımızda <span>→</span></a>'+
  '<a href="/kargo-iade">Kargo ve değişim <span>→</span></a><a href="/iletisim">İletişim <span>→</span></a>'+
  '<a href="'+SHOP_STORE+'" target="_blank" rel="noopener">Shopier mağazası <span>↗</span></a></div>';
}

function footer(){
  return '<footer><div class="cols"><div><div class="brand" style="margin-bottom:10px"><img src="'+LOGO+'" alt="JettLuxe" style="width:34px;height:34px"><span><b>JETTLUXE</b><small>Premium</small></span></div>'+
  '<p>Sipariş oluşturmadan önce ürün açıklamasını okuyun. İade yoktur, değişim mevcuttur.</p></div>'+
  '<div><h4>Mağaza</h4><a href="/koleksiyon">Tüm ürünler</a><a href="/hakkimizda">Hakkımızda</a><a href="/kargo-iade">Kargo ve değişim</a><a href="/iletisim">İletişim</a></div>'+
  '<div><h4>İletişim</h4><a href="tel:'+TEL+'">0545 155 79 34</a><a href="mailto:'+MAIL+'">'+MAIL+'</a><a href="'+IG+'" target="_blank" rel="noopener">Instagram</a><a href="'+SHOP_STORE+'" target="_blank" rel="noopener">Shopier</a></div></div>'+
  '<div class="fbot"><span>© 2026 JettLuxe Premium</span><span>Shopier altyapısıyla güvenli ödeme</span></div></footer>';
}

function band(){
  return '<section class="band"><div class="eyebrow">Sipariş</div><h3 class="serif">Tüm koleksiyon Shopier\'de</h3>'+
  '<p>Kargo ve ödeme Shopier üzerinden yürür.</p><a class="btn btn-gold" href="'+SHOP_STORE+'" target="_blank" rel="noopener">Mağazaya git</a></section>';
}

function card(p){
  const on = favs.includes(p.id) ? " on" : "";
  return '<article class="card"><div class="thumb"><a href="/urun?id='+p.id+'">'+imgTag(p.img,p.name)+'</a>'+
  (p.badge?'<span class="badge">'+p.badge+'</span>':'')+
  '<button class="fav'+on+'" data-fav="'+p.id+'" aria-label="Favori">'+ICO.heart+'</button></div>'+
  '<div class="body"><a class="nm" href="/urun?id='+p.id+'">'+esc(p.name)+'</a><div class="pr">'+p.price+' TL</div>'+
  '<a class="buy" href="'+SHOP+p.id+'" target="_blank" rel="noopener">Shopier\'de satın al</a></div></article>';
}

function init(){
  const h = document.getElementById("hdr");
  if(h) h.innerHTML = header(document.body.dataset.page||"");
  const f = document.getElementById("ftr");
  if(f) f.innerHTML = footer();
  const b = document.getElementById("burger");
  if(b) b.onclick = () => document.getElementById("drawer").classList.toggle("open");
  document.addEventListener("click", e=>{
    const t = e.target.closest("[data-fav]");
    if(!t) return;
    const i = favs.indexOf(t.dataset.fav);
    i>-1 ? favs.splice(i,1) : favs.push(t.dataset.fav);
    localStorage.setItem("jl_favs", JSON.stringify(favs));
    t.classList.toggle("on");
  });
}

function grid(target, items){
  const el = document.getElementById(target);
  if(!el) return;
  el.innerHTML = items.map(card).join("");
}

function home(){
  grid("newest", PRODUCTS.slice(0,6));
  grid("featured", PRODUCTS.slice(8,11));
  const c = document.getElementById("cats");
  c.innerHTML = CATS.map(x=>'<a class="cat" href="/koleksiyon?kategori='+x[0]+'"><span class="arw">'+ICO.arr+'</span><b>'+x[1]+'</b><small>'+x[2]+'</small></a>').join("");
}

function koleksiyon(){
  const qs = new URLSearchParams(location.search);
  let cat = qs.get("kategori") || "all";
  let sort = "rec", q = "";
  const list = document.getElementById("list");
  const count = document.getElementById("count");
  const chips = document.getElementById("chips");

  chips.innerHTML = '<button class="chip'+(cat==="all"?" on":"")+'" data-cat="all">Tümü</button>'+
    CATS.map(x=>'<button class="chip'+(cat===x[0]?" on":"")+'" data-cat="'+x[0]+'">'+x[1]+'</button>').join("");

  function draw(){
    let r = PRODUCTS.slice();
    if(cat!=="all") r = r.filter(p=>p.cat===cat);
    if(q) r = r.filter(p=>p.name.toLowerCase().includes(q.toLowerCase()));
    if(sort==="asc") r.sort((a,b)=>parseFloat(a.price.replace(",","."))-parseFloat(b.price.replace(",",".")));
    if(sort==="desc") r.sort((a,b)=>parseFloat(b.price.replace(",","."))-parseFloat(a.price.replace(",",".")));
    count.textContent = r.length + " ürün listeleniyor";
    list.innerHTML = r.length ? r.map(card).join("") :
      '<div class="prose" style="grid-column:1/-1"><p>Bu kategoride henüz ürün yok. Yeni parçalar Shopier mağazasında yayınlanıyor.</p><a class="btn btn-ghost" href="'+SHOP_STORE+'" target="_blank" rel="noopener">Shopier\'de tümünü gör</a></div>';
  }

  chips.addEventListener("click", e=>{
    const t = e.target.closest("[data-cat]");
    if(!t) return;
    cat = t.dataset.cat;
    chips.querySelectorAll(".chip").forEach(x=>x.classList.toggle("on", x===t));
    history.replaceState(null,"","/koleksiyon"+(cat==="all"?"":"?kategori="+cat));
    draw();
  });
  document.getElementById("q").addEventListener("input", e=>{ q = e.target.value; draw(); });
  document.getElementById("sort").addEventListener("change", e=>{ sort = e.target.value; draw(); });
  draw();
}

function urun(){
  const id = new URLSearchParams(location.search).get("id");
  const p = PRODUCTS.find(x=>x.id===id);
  const el = document.getElementById("detail");
  if(!p){ el.innerHTML = '<div class="prose"><p>Ürün bulunamadı.</p><a class="btn btn-gold" href="/koleksiyon">Koleksiyona dön</a></div>'; return; }
  document.title = p.name + " — JettLuxe Premium";
  const catName = (CATS.find(c=>c[0]===p.cat)||["","Parça"])[1];
  el.innerHTML = '<div class="dgrid"><div class="detail-img">'+imgTag(p.img,p.name,true)+'</div><div class="pmeta">'+
  '<a class="eyebrow" href="/koleksiyon?kategori='+p.cat+'">'+catName+'</a><h1>'+esc(p.name)+'</h1>'+
  '<div class="price">'+p.price+' TL</div>'+
  '<p class="muted" style="font-size:12px;margin-top:8px">Stok ve varyasyon bilgisi Shopier sayfasında. Sipariş öncesi açıklamayı okuyun.</p>'+
  '<div class="kvgrid"><div class="kv">'+ICO.ship+'<span>1500 TL üzeri siparişlerde kargo ücretsiz, altında 135 TL.</span></div>'+
  '<div class="kv">'+ICO.swap+'<span>İade yoktur, değişim mevcuttur.</span></div>'+
  '<div class="kv">'+ICO.shield+'<span>Ödeme ve kargo Shopier güvencesiyle.</span></div></div>'+
  '<a class="btn btn-gold btn-block" href="'+SHOP+p.id+'" target="_blank" rel="noopener">Shopier\'de satın al '+ICO.arr+'</a>'+
  '<div style="height:10px"></div><a class="btn btn-ghost btn-block" href="/koleksiyon">Koleksiyona dön</a></div></div>';
  const rel = PRODUCTS.filter(x=>x.cat===p.cat && x.id!==p.id).slice(0,4);
  if(rel.length){ document.getElementById("related-sec").style.display="block"; grid("related", rel); }
}

function boot(fn){
  document.addEventListener("DOMContentLoaded", ()=>{ init(); if(fn) fn(); });
}
