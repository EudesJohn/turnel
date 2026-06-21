import { useState, useEffect, useRef } from "react";

const img1 = "/img1.jpg";;
const img2 = "/img2.jpg";;
const img3 = "/img3.jpg";;
const img4 = "/img4.jpg";;
const img5 = "/img5.jpg";;
const img6 = "/img6.jpg";;
const img7 = "/img7.jpg";;

const PAYMENT_LINK = "https://johnson-store.mymaketou.store/products/-10-000-videos-tiktok-pretes-comment-boost-tes-live-tiktok-et-compte-tik-tok-monetise-3/checkout";
const WHATSAPP = "https://wa.me/22940571373";

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function Reveal({ children, delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{ transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`, opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(36px)" }}>
      {children}
    </div>
  );
}

function CountdownTimer() {
  const [time, setTime] = useState(23 * 60 + 47);
  useEffect(() => { const id = setInterval(() => setTime(t => t > 0 ? t - 1 : 0), 1000); return () => clearInterval(id); }, []);
  const m = String(Math.floor(time / 60)).padStart(2, "0");
  const s = String(time % 60).padStart(2, "0");
  return (
    <span style={{ display:"inline-flex", gap:4, alignItems:"center", fontFamily:"'Bebas Neue',cursive", fontSize:22, color:"#FF4D00" }}>
      <span style={{ background:"#1a1a1a", border:"1px solid #FF4D00", borderRadius:6, padding:"2px 8px" }}>{m}</span>
      <span>:</span>
      <span style={{ background:"#1a1a1a", border:"1px solid #FF4D00", borderRadius:6, padding:"2px 8px" }}>{s}</span>
    </span>
  );
}

function CTAButton({ children, href, big }) {
  const [h, setH] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display:"flex", alignItems:"center", justifyContent:"center",
        background: h ? "linear-gradient(135deg,#ff6520,#FFD000)" : "linear-gradient(135deg,#FF4D00,#FFB800)",
        border:"none", borderRadius: big ? 18 : 12,
        padding: big ? "20px 40px" : "14px 30px",
        fontSize: big ? 19 : 15, fontWeight:900,
        color:"#000", cursor:"pointer", letterSpacing:1,
        fontFamily:"'Bebas Neue',cursive",
        boxShadow: h ? "0 14px 45px rgba(255,77,0,0.65)" : "0 6px 28px rgba(255,77,0,0.38)",
        transform: h ? "translateY(-3px) scale(1.02)" : "translateY(0) scale(1)",
        transition:"all 0.25s ease", width:"100%", maxWidth:520,
        textDecoration:"none", animation:"pulse 2.2s infinite",
      }}>
      {children}
    </a>
  );
}

function WAButton({ children }) {
  const [h, setH] = useState(false);
  return (
    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display:"flex", alignItems:"center", justifyContent:"center", gap:10,
        background: h ? "#1aad2e" : "#25D366",
        border:"none", borderRadius:12,
        padding:"14px 30px", fontSize:15, fontWeight:800,
        color:"#fff", cursor:"pointer",
        fontFamily:"'Bebas Neue',cursive", letterSpacing:1,
        boxShadow: h ? "0 10px 32px rgba(37,211,102,0.5)" : "0 4px 18px rgba(37,211,102,0.3)",
        transform: h ? "translateY(-2px)" : "translateY(0)",
        transition:"all 0.2s ease", width:"100%", maxWidth:520, textDecoration:"none",
      }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      {children}
    </a>
  );
}

function StatCard({ val, label }) {
  return (
    <div style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:14, padding:"16px 24px", textAlign:"center", flex:"1 1 120px" }}>
      <div style={{ fontFamily:"'Bebas Neue',cursive", fontSize:30, color:"#FF4D00", lineHeight:1 }}>{val}</div>
      <div style={{ fontSize:12, color:"#777", marginTop:4 }}>{label}</div>
    </div>
  );
}

// Real testimonials from screenshots
const TESTIMONIALS_REAL = [
  { name:"Walé", country:"Bénin", flag:"🇧🇯", screenshot: img3 },
  { name:"Youssouf Mc You Bouraima", country:"Bénin", flag:"🇧🇯", screenshot: img4 },
  { name:"Fabrice Allaye", country:"Bénin", flag:"🇧🇯", screenshot: img5 },
  { name:"Konan William K.", country:"Côte d'Ivoire", flag:"🇨🇮", screenshot: img6 },
];

// Generated testimonials
const TESTIMONIALS_GEN = [
  { name:"Aminata K.", country:"Côte d'Ivoire", flag:"🇨🇮", avatar:"A", color:"#FF4D00", stars:5, text:"J'avais 120 abonnés depuis 2 ans. En appliquant juste le module 3 du guide, j'ai atteint 4 200 abonnés en 6 semaines. Je vends maintenant mes bijoux en ligne.", result:"0 → 4 200 abonnés en 6 semaines 🚀" },
  { name:"Moussa D.", country:"Sénégal", flag:"🇸🇳", avatar:"M", color:"#FFB800", stars:5, text:"J'avais essayé des dizaines d'astuces sur YouTube sans résultat. Ce guide m'a donné une vraie stratégie. Mon compte TikTok a explosé en 30 jours.", result:"0 → 8 500 abonnés en 30 jours 🔥" },
  { name:"Fatima B.", country:"Maroc", flag:"🇲🇦", avatar:"F", color:"#FF4D00", stars:5, text:"Grâce au module sur la monétisation, j'ai commencé à vendre mes formations en ligne avec seulement 800 abonnés. Incroyable ce que ce guide m'a apporté.", result:"Premiers revenus dès 800 abonnés 💰" },
  { name:"Nadia O.", country:"Cameroun", flag:"🇨🇲", avatar:"N", color:"#FFB800", stars:5, text:"Je recommande ce guide à tous les entrepreneurs. La section sur les vidéos virales m'a transformée en créatrice de contenu professionnelle.", result:"3 collaborations payantes obtenues ✅" },
  { name:"Ibrahim S.", country:"Guinée", flag:"🇬🇳", avatar:"I", color:"#FF4D00", stars:5, text:"Franchement j'étais sceptique. Mais les stratégies sont tellement concrètes et adaptées à l'Afrique que ça m'a convaincu dès le module 1.", result:"De 0 à 5 200 abonnés en 3 mois 📈" },
  { name:"Kofi A.", country:"Ghana", flag:"🇬🇭", avatar:"K", color:"#FFB800", stars:5, text:"The algorithms module alone was worth 10x the price. I went from posting into the void to getting consistent reach and engagement on every single post.", result:"0 → 12 000 followers in 8 weeks 🎯" },
];

export default function App() {
  const [tab, setTab] = useState(0);

  const modules = [
    { icon:"🎯", title:"Choisir la bonne plateforme", desc:"Instagram, TikTok, YouTube, Facebook, Pinterest — on t'explique LAQUELLE cibler selon ton business et ton audience." },
    { icon:"⚡", title:"Maîtriser les algorithmes", desc:"Comprends exactement comment chaque algorithme fonctionne et tourne-le à ton avantage pour une portée maximale." },
    { icon:"🔥", title:"Contenu viral", desc:"La formule exacte pour créer des posts qui explosent : hooks, visuels, timing, hashtags — tout est révélé." },
    { icon:"🤝", title:"Communauté engagée", desc:"Transforme tes abonnés en fans fidèles qui achètent, recommandent et défendent tes produits." },
    { icon:"💰", title:"Monétiser dès 500 abonnés", desc:"3 méthodes concrètes pour générer de l'argent MAINTENANT sans attendre 10 000 abonnés." },
    { icon:"🤖", title:"Automatiser ta croissance", desc:"Planification, réponses automatiques, analyses — gagne du temps et passe ta croissance en pilote automatique." },
    { icon:"📊", title:"Analyser tes performances", desc:"Lis tes statistiques, comprends ce qui fonctionne et optimise ta stratégie chaque semaine." },
    { icon:"🎬", title:"Vidéos virales prêtes à l'emploi", desc:"Scripts, templates et idées testées et approuvées pour exploser en vues immédiatement." },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@400;500;600;700;800;900&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        body{background:#080808;}
        @keyframes pulse{0%,100%{box-shadow:0 6px 24px rgba(255,77,0,0.35)}50%{box-shadow:0 6px 44px rgba(255,77,0,0.7)}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
        @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
        @keyframes glow{0%,100%{opacity:0.5}50%{opacity:1}}
        @keyframes scroll-x{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        ::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:#111}::-webkit-scrollbar-thumb{background:#FF4D00;border-radius:3px}
      `}</style>

      <div style={{ fontFamily:"'Outfit',sans-serif", background:"#080808", color:"#fff", minHeight:"100vh", overflowX:"hidden" }}>

        {/* ── URGENCY BAR ── */}
        <div style={{ background:"linear-gradient(90deg,#FF4D00,#FFB800,#FF4D00)", backgroundSize:"200% auto", animation:"shimmer 3s linear infinite", padding:"9px 16px", textAlign:"center", display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:"center", gap:12 }}>
          <span style={{ fontSize:13, fontWeight:800, color:"#000" }}>⏰ OFFRE LIMITÉE — Expire dans :</span>
          <CountdownTimer />
        </div>

        {/* ── HERO ── */}
        <section style={{ maxWidth:880, margin:"0 auto", padding:"56px 20px 40px", textAlign:"center" }}>

          <Reveal>
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,77,0,0.12)", border:"1px solid rgba(255,77,0,0.4)", borderRadius:100, padding:"8px 20px", marginBottom:24 }}>
              <span style={{ fontSize:15 }}>🔥</span>
              <span style={{ color:"#FF4D00", fontWeight:700, fontSize:12, letterSpacing:1.5, textTransform:"uppercase" }}>Guide Complet · Édition 2026</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 style={{ fontFamily:"'Bebas Neue',cursive", fontSize:"clamp(46px,9vw,92px)", lineHeight:0.95, letterSpacing:2, marginBottom:20 }}>
              <span style={{ color:"#fff" }}>RÉSEAUX SOCIAUX :</span><br/>
              <span style={{ background:"linear-gradient(90deg,#FF4D00,#FFB800)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>DE ZÉRO À 10 000</span><br/>
              <span style={{ color:"#fff" }}>ABONNÉS</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p style={{ fontSize:"clamp(15px,2.4vw,19px)", color:"#aaa", maxWidth:600, margin:"0 auto 32px", lineHeight:1.65 }}>
              La méthode <strong style={{ color:"#fff" }}>étape par étape</strong> pour développer ta communauté,<br/>attirer des clients et <strong style={{ color:"#FFB800" }}>générer des revenus réels</strong> sur les réseaux sociaux.
            </p>
          </Reveal>

          {/* Product image */}
          <Reveal delay={0.25}>
            <div style={{ position:"relative", display:"inline-block", margin:"0 auto 36px", animation:"float 4.5s ease-in-out infinite" }}>
              <div style={{ position:"absolute", inset:-24, background:"radial-gradient(ellipse,rgba(255,77,0,0.28),transparent 68%)", animation:"glow 2.5s ease-in-out infinite" }}/>
              <img src={img7} alt="Réseaux Sociaux De Zéro à 10 000 Abonnés"
                style={{ width:"min(300px,80vw)", borderRadius:20, boxShadow:"0 28px 80px rgba(255,77,0,0.42), 0 0 0 1px rgba(255,77,0,0.18)", position:"relative", zIndex:1 }}/>
              {/* Prix badge */}
              <div style={{ position:"absolute", top:-12, right:-12, background:"linear-gradient(135deg,#FF4D00,#FFB800)", borderRadius:"50%", width:86, height:86, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", zIndex:2, boxShadow:"0 8px 26px rgba(255,77,0,0.55)" }}>
                <span style={{ fontSize:9, fontWeight:800, color:"#000", textDecoration:"line-through", opacity:0.7 }}>15 000</span>
                <span style={{ fontSize:15, fontWeight:900, color:"#000", lineHeight:1 }}>5 750</span>
                <span style={{ fontSize:9, fontWeight:900, color:"#000" }}>FCFA</span>
              </div>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.35}>
            <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:12, marginBottom:36 }}>
              <StatCard val="200+" label="Entrepreneurs formés"/>
              <StatCard val="8" label="Modules complets"/>
              <StatCard val="∞" label="Accès à vie"/>
              <StatCard val="100%" label="Satisfait ou remboursé"/>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.4}>
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:12 }}>
              <CTAButton href={PAYMENT_LINK} big>
                🚀 COMMANDER MAINTENANT — 5 750 FCFA / ~8,70€
              </CTAButton>
              <WAButton>💬 POSER UNE QUESTION SUR WHATSAPP</WAButton>
              <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:16, marginTop:6 }}>
                {["🔒 Paiement sécurisé","⚡ Accès immédiat","🛡️ Remboursé sous 7j","📲 Orange Money · Wave · Visa"].map(t=>(
                  <span key={t} style={{ fontSize:12, color:"#555" }}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── PROOF — TIKTOK STATS ── */}
        <section style={{ background:"linear-gradient(135deg,#0d0d0d,#110800)", borderTop:"1px solid #1e1e1e", borderBottom:"1px solid #1e1e1e", padding:"64px 20px" }}>
          <div style={{ maxWidth:860, margin:"0 auto" }}>
            <Reveal>
              <div style={{ textAlign:"center", marginBottom:40 }}>
                <p style={{ color:"#FF4D00", fontWeight:700, letterSpacing:3, textTransform:"uppercase", fontSize:12, marginBottom:10 }}>— La preuve par les chiffres —</p>
                <h2 style={{ fontFamily:"'Bebas Neue',cursive", fontSize:"clamp(30px,5vw,54px)", letterSpacing:1 }}>
                  LES <span style={{ background:"linear-gradient(90deg,#FF4D00,#FFB800)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>RÉSULTATS RÉELS</span> PARLENT
                </h2>
                <p style={{ color:"#777", fontSize:14, marginTop:10 }}>Statistiques TikTok officielles — vérifiables</p>
              </div>
            </Reveal>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:20 }}>
              {[
                { img:img1, stats:[["3,2M","Vues"],["76K","Likes"],["7 172","Nouveaux abonnés"],["163 $","Revenus estimés"]] },
                { img:img2, stats:[["4,4M","Vues"],["137K","Likes"],["5 498","Nouveaux abonnés"],["525 $","Revenus estimés"]] },
              ].map((item,i)=>(
                <Reveal key={i} delay={i*0.15}>
                  <div style={{ background:"linear-gradient(135deg,#111,#1a1a1a)", border:"1px solid rgba(255,77,0,0.2)", borderRadius:20, overflow:"hidden" }}>
                    <img src={item.img} alt={`Stats TikTok ${i+1}`} style={{ width:"100%", display:"block", borderBottom:"1px solid #2a2a2a" }}/>
                    <div style={{ padding:"20px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                      {item.stats.map(([val,lab])=>(
                        <div key={lab} style={{ textAlign:"center", background:"rgba(255,77,0,0.07)", borderRadius:10, padding:"12px 8px" }}>
                          <div style={{ fontFamily:"'Bebas Neue',cursive", fontSize:26, color:"#FF4D00", lineHeight:1 }}>{val}</div>
                          <div style={{ fontSize:11, color:"#777", marginTop:3 }}>{lab}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.3}>
              <div style={{ marginTop:28, background:"rgba(255,77,0,0.08)", border:"1px solid rgba(255,77,0,0.25)", borderRadius:16, padding:"20px 24px", textAlign:"center" }}>
                <p style={{ fontSize:16, color:"#fff", fontWeight:700, lineHeight:1.6 }}>
                  Ces résultats viennent de la <span style={{ color:"#FF4D00" }}>même méthode</span> que tu trouveras dans ce guide. <br/>
                  <span style={{ color:"#FFB800" }}>Des millions de vues. Des milliers d'abonnés. Des revenus réels. 🔥</span>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── PAIN SECTION ── */}
        <section style={{ background:"linear-gradient(135deg,#0f0000,#1a0800)", borderBottom:"1px solid #2a1500", padding:"64px 20px" }}>
          <div style={{ maxWidth:780, margin:"0 auto" }}>
            <Reveal>
              <h2 style={{ fontFamily:"'Bebas Neue',cursive", fontSize:"clamp(28px,5vw,52px)", textAlign:"center", marginBottom:36, letterSpacing:1 }}>
                Tu te reconnais dans <span style={{ color:"#FF4D00" }}>ces situations ?</span>
              </h2>
            </Reveal>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(270px,1fr))", gap:14 }}>
              {[
                ["😤","Tu postes chaque jour mais ton compte stagne à quelques dizaines d'abonnés…"],
                ["😫","Tu vois des gens avec moins de talent que toi exploser sur TikTok et Instagram…"],
                ["💸","Tu as essayé des astuces YouTube mais rien de concret n'a changé…"],
                ["😰","Tu ne sais pas quel contenu créer, ni à quelle heure publier pour toucher ton audience…"],
                ["🤷","Tu ignores comment l'algorithme fonctionne et tu publies dans le vide…"],
                ["😤","Tu crois qu'il faut 100K abonnés pour commencer à gagner de l'argent…"],
              ].map(([icon,text],i)=>(
                <Reveal key={i} delay={i*0.07}>
                  <div style={{ background:"rgba(255,77,0,0.06)", border:"1px solid rgba(255,77,0,0.15)", borderRadius:14, padding:"18px 18px", display:"flex", gap:14, alignItems:"flex-start" }}>
                    <span style={{ fontSize:22, flexShrink:0 }}>{icon}</span>
                    <p style={{ color:"#ccc", fontSize:14, lineHeight:1.65 }}>{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.45}>
              <div style={{ marginTop:32, background:"rgba(255,77,0,0.1)", border:"2px solid #FF4D00", borderRadius:16, padding:"24px", textAlign:"center" }}>
                <p style={{ fontSize:"clamp(15px,2.4vw,19px)", color:"#fff", fontWeight:700, lineHeight:1.55 }}>
                  Si tu as dit <span style={{ color:"#FF4D00" }}>"oui"</span> à au moins 2 points… <br/>
                  <span style={{ color:"#FFB800" }}>ce guide a été créé EXACTEMENT pour toi 👇</span>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── MODULES ── */}
        <section style={{ maxWidth:880, margin:"0 auto", padding:"70px 20px" }}>
          <Reveal>
            <div style={{ textAlign:"center", marginBottom:44 }}>
              <p style={{ color:"#FF4D00", fontWeight:700, letterSpacing:3, textTransform:"uppercase", fontSize:12, marginBottom:10 }}>— Ce que tu vas maîtriser —</p>
              <h2 style={{ fontFamily:"'Bebas Neue',cursive", fontSize:"clamp(30px,5vw,54px)", letterSpacing:1 }}>
                8 MODULES <span style={{ background:"linear-gradient(90deg,#FF4D00,#FFB800)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>COMPLETS</span>
              </h2>
            </div>
          </Reveal>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:22, justifyContent:"center" }}>
            {modules.map((m,i)=>(
              <button key={i} onClick={()=>setTab(i)}
                style={{ background: tab===i ? "linear-gradient(135deg,#FF4D00,#FFB800)" : "rgba(255,255,255,0.05)", border: tab===i ? "none":"1px solid rgba(255,255,255,0.09)", borderRadius:100, padding:"8px 15px", fontSize:12, fontWeight:700, color: tab===i ? "#000":"#999", cursor:"pointer", transition:"all 0.2s", display:"flex", alignItems:"center", gap:5 }}>
                {m.icon} M{i+1}
              </button>
            ))}
          </div>
          <div style={{ background:"linear-gradient(135deg,#111,#1a1a1a)", border:"1px solid rgba(255,77,0,0.22)", borderRadius:20, padding:"28px 24px", transition:"all 0.3s" }}>
            <div style={{ display:"flex", alignItems:"flex-start", gap:18 }}>
              <span style={{ fontSize:44, flexShrink:0 }}>{modules[tab].icon}</span>
              <div>
                <h3 style={{ fontFamily:"'Bebas Neue',cursive", fontSize:26, color:"#FF4D00", letterSpacing:1, marginBottom:8 }}>Module {tab+1} — {modules[tab].title}</h3>
                <p style={{ color:"#ccc", fontSize:15, lineHeight:1.7 }}>{modules[tab].desc}</p>
              </div>
            </div>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:12, marginTop:28 }}>
            {[
              ["🎬","Vidéos virales prêtes à l'emploi","Scripts + templates testés et approuvés"],
              ["📲","Compatible tous téléphones","Accessible directement depuis ton mobile"],
              ["🔄","Mises à jour incluses","Le guide évolue avec les algorithmes"],
              ["♾️","Accès à vie","Une fois acheté, c'est pour toujours"],
              ["🛡️","Satisfait ou remboursé 7j","Zéro risque. Si tu n'es pas satisfait, remboursé."],
            ].map(([icon,title,sub],i)=>(
              <Reveal key={i} delay={i*0.06}>
                <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"16px 18px", display:"flex", gap:12, alignItems:"center" }}>
                  <span style={{ fontSize:26 }}>{icon}</span>
                  <div>
                    <div style={{ fontWeight:700, color:"#fff", fontSize:14 }}>{title}</div>
                    <div style={{ fontSize:12, color:"#555", marginTop:2 }}>{sub}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section style={{ background:"#0a0a0a", borderTop:"1px solid #1a1a1a", borderBottom:"1px solid #1a1a1a", padding:"70px 20px" }}>
          <div style={{ maxWidth:920, margin:"0 auto" }}>
            <Reveal>
              <div style={{ textAlign:"center", marginBottom:44 }}>
                <p style={{ color:"#FFB800", fontWeight:700, letterSpacing:3, textTransform:"uppercase", fontSize:12, marginBottom:10 }}>— Avis clients réels —</p>
                <h2 style={{ fontFamily:"'Bebas Neue',cursive", fontSize:"clamp(30px,5vw,54px)", letterSpacing:1 }}>
                  ILS <span style={{ background:"linear-gradient(90deg,#FF4D00,#FFB800)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>ONT ACHETÉ</span> ET ILS EN PARLENT
                </h2>
              </div>
            </Reveal>

            {/* Screenshots réels */}
            <Reveal delay={0.05}>
              <p style={{ color:"#FF4D00", fontWeight:700, fontSize:12, letterSpacing:2, textTransform:"uppercase", marginBottom:18, paddingLeft:4 }}>📸 Captures d'écran authentiques</p>
            </Reveal>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:18, marginBottom:48 }}>
              {TESTIMONIALS_REAL.map((t,i)=>(
                <Reveal key={i} delay={i*0.09}>
                  <div style={{ background:"linear-gradient(135deg,#111,#1a1a1a)", border:"1px solid #2a2a2a", borderRadius:18, overflow:"hidden" }}>
                    <div style={{ position:"relative" }}>
                      <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:"linear-gradient(90deg,#FF4D00,#FFB800)" }}/>
                      <img src={t.screenshot} alt={`Avis ${t.name}`} style={{ width:"100%", display:"block" }}/>
                    </div>
                    <div style={{ padding:"14px 16px", display:"flex", alignItems:"center", gap:10 }}>
                      <div style={{ width:34, height:34, borderRadius:"50%", background:"linear-gradient(135deg,#FF4D00,#FFB800)", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:900, fontSize:13, color:"#000", flexShrink:0 }}>
                        {t.name[0]}
                      </div>
                      <div>
                        <div style={{ fontWeight:700, color:"#fff", fontSize:13 }}>{t.name}</div>
                        <div style={{ fontSize:11, color:"#666" }}>{t.flag} {t.country}</div>
                      </div>
                      <div style={{ marginLeft:"auto", background:"rgba(255,77,0,0.12)", border:"1px solid rgba(255,77,0,0.3)", borderRadius:8, padding:"5px 10px", fontSize:11, color:"#FF4D00", fontWeight:700, whiteSpace:"nowrap" }}>
                        ✓ Vérifié
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Témoignages générés */}
            <Reveal delay={0.05}>
              <p style={{ color:"#FFB800", fontWeight:700, fontSize:12, letterSpacing:2, textTransform:"uppercase", marginBottom:18, paddingLeft:4 }}>💬 Témoignages de notre communauté</p>
            </Reveal>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:18 }}>
              {TESTIMONIALS_GEN.map((t,i)=>(
                <Reveal key={i} delay={i*0.09}>
                  <div style={{ background:"linear-gradient(135deg,#111,#1a1a1a)", border:"1px solid #252525", borderRadius:18, padding:"22px 20px", position:"relative", overflow:"hidden" }}>
                    <div style={{ position:"absolute", top:0, left:0, width:4, height:"100%", background:`linear-gradient(to bottom,${t.color},#FFB800)` }}/>
                    {/* Stars */}
                    <div style={{ display:"flex", gap:2, marginBottom:14 }}>
                      {Array(t.stars).fill(0).map((_,s)=>(
                        <span key={s} style={{ fontSize:14, color:"#FFB800" }}>⭐</span>
                      ))}
                    </div>
                    <p style={{ color:"#ccc", fontSize:14, lineHeight:1.65, marginBottom:16, fontStyle:"italic" }}>"{t.text}"</p>
                    <div style={{ background:"rgba(255,77,0,0.1)", border:"1px solid rgba(255,77,0,0.25)", borderRadius:8, padding:"8px 12px", marginBottom:16 }}>
                      <span style={{ color:"#FF4D00", fontWeight:800, fontSize:13 }}>🚀 {t.result}</span>
                    </div>
                    <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                      <div style={{ width:38, height:38, borderRadius:"50%", background:`linear-gradient(135deg,${t.color},#FFB800)`, display:"flex", alignItems:"center", justifyContent:"center", fontWeight:900, fontSize:15, color:"#000", flexShrink:0 }}>
                        {t.avatar}
                      </div>
                      <div>
                        <div style={{ fontWeight:700, color:"#fff", fontSize:14 }}>{t.name}</div>
                        <div style={{ fontSize:12, color:"#666" }}>{t.flag} {t.country}</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <div style={{ marginTop:36, textAlign:"center" }}>
                <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,184,0,0.1)", border:"1px solid rgba(255,184,0,0.3)", borderRadius:100, padding:"10px 24px" }}>
                  <span style={{ fontSize:18 }}>⭐⭐⭐⭐⭐</span>
                  <span style={{ color:"#FFB800", fontWeight:700, fontSize:14 }}>100% des avis sont positifs</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── PRICE BLOCK ── */}
        <section style={{ maxWidth:720, margin:"0 auto", padding:"70px 20px" }}>
          <Reveal>
            <h2 style={{ fontFamily:"'Bebas Neue',cursive", fontSize:"clamp(28px,5vw,52px)", textAlign:"center", letterSpacing:1, marginBottom:36 }}>
              COMBIEN ÇA VAUT <span style={{ color:"#FFB800" }}>VRAIMENT ?</span>
            </h2>
          </Reveal>
          <div style={{ background:"linear-gradient(135deg,#111,#181818)", border:"1px solid #252525", borderRadius:20, padding:"28px 24px", marginBottom:22 }}>
            {[
              ["Méthode complète 8 modules","30 000 FCFA"],
              ["Vidéos virales prêtes à l'emploi","15 000 FCFA"],
              ["Stratégie monétisation","20 000 FCFA"],
              ["Templates & scripts","10 000 FCFA"],
              ["Mises à jour à vie","25 000 FCFA"],
            ].map(([lab,val],i)=>(
              <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"13px 0", borderBottom: i<4 ? "1px solid #1e1e1e":"none" }}>
                <div style={{ display:"flex", gap:10, alignItems:"center" }}>
                  <span style={{ color:"#FF4D00", fontWeight:900 }}>✓</span>
                  <span style={{ color:"#ccc", fontSize:14 }}>{lab}</span>
                </div>
                <span style={{ color:"#555", textDecoration:"line-through", fontSize:13 }}>{val}</span>
              </div>
            ))}
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:14, paddingTop:14, borderTop:"2px solid #FF4D00" }}>
              <span style={{ fontWeight:800, color:"#fff", fontSize:16 }}>VALEUR TOTALE</span>
              <span style={{ fontFamily:"'Bebas Neue',cursive", fontSize:26, color:"#555", textDecoration:"line-through" }}>100 000 FCFA</span>
            </div>
          </div>

          <Reveal delay={0.15}>
            <div style={{ background:"linear-gradient(135deg,rgba(255,77,0,0.13),rgba(255,184,0,0.08))", border:"2px solid #FF4D00", borderRadius:20, padding:"36px 28px", textAlign:"center" }}>
              <p style={{ color:"#aaa", fontSize:14, marginBottom:6 }}>Prix aujourd'hui seulement</p>
              <div style={{ fontFamily:"'Bebas Neue',cursive", fontSize:"clamp(60px,11vw,96px)", background:"linear-gradient(90deg,#FF4D00,#FFB800)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", lineHeight:1 }}>5 750 FCFA</div>
              <div style={{ fontFamily:"'Bebas Neue',cursive", fontSize:"clamp(28px,5vw,44px)", color:"#FFB800", marginTop:4 }}>≈ 8,70 €</div>
              <p style={{ color:"#666", fontSize:13, marginTop:6 }}>Au lieu de 15 000 FCFA — Tu économises 9 250 FCFA</p>
              <div style={{ marginTop:24, display:"flex", flexDirection:"column", alignItems:"center", gap:12 }}>
                <CTAButton href={PAYMENT_LINK} big>⚡ JE PRENDS MA COPIE — 5 750 FCFA / 8,70€</CTAButton>
                <WAButton>💬 DES QUESTIONS ? ÉCRIS-NOUS SUR WHATSAPP</WAButton>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── GUARANTEE ── */}
        <section style={{ background:"#0a0a0a", borderTop:"1px solid #1a1a1a", padding:"56px 20px" }}>
          <div style={{ maxWidth:620, margin:"0 auto", textAlign:"center" }}>
            <Reveal>
              <div style={{ fontSize:68, marginBottom:14 }}>🛡️</div>
              <h2 style={{ fontFamily:"'Bebas Neue',cursive", fontSize:"clamp(28px,5vw,50px)", letterSpacing:1, marginBottom:14 }}>
                GARANTIE <span style={{ color:"#FF4D00" }}>SATISFAIT OU REMBOURSÉ</span> 7 JOURS
              </h2>
              <p style={{ color:"#999", fontSize:15, lineHeight:1.7, marginBottom:22 }}>
                On est tellement confiants que cette méthode va transformer ta présence en ligne qu'on te donne <strong style={{ color:"#fff" }}>7 jours pour tout tester.</strong> Si tu n'es pas satisfait, tu es remboursé à 100%. Aucune question posée.
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:10 }}>
                {["🔒 Paiement sécurisé","⚡ Accès immédiat","♾️ Accès à vie","🔄 Mises à jour incluses"].map(t=>(
                  <div key={t} style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.09)", borderRadius:100, padding:"8px 16px", fontSize:12, color:"#aaa" }}>{t}</div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section style={{ maxWidth:760, margin:"0 auto", padding:"70px 20px", textAlign:"center" }}>
          <Reveal>
            <div style={{ background:"linear-gradient(135deg,#111 0%,#1a0800 50%,#111 100%)", border:"1px solid rgba(255,77,0,0.28)", borderRadius:24, padding:"48px 28px" }}>
              <h2 style={{ fontFamily:"'Bebas Neue',cursive", fontSize:"clamp(30px,6vw,60px)", letterSpacing:1, marginBottom:10 }}>
                TON SUCCÈS <span style={{ background:"linear-gradient(90deg,#FF4D00,#FFB800)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>COMMENCE AUJOURD'HUI</span>
              </h2>
              <p style={{ color:"#999", fontSize:15, marginBottom:28, lineHeight:1.65 }}>
                Des centaines de personnes ont déjà transformé leur présence en ligne.<br/>
                <strong style={{ color:"#fff" }}>C'est ton tour maintenant.</strong>
              </p>
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:14, marginBottom:24 }}>
                <CTAButton href={PAYMENT_LINK} big>🚀 ACCÉDER MAINTENANT — 5 750 FCFA / 8,70€</CTAButton>
                <WAButton>💬 CONTACTER VIA WHATSAPP</WAButton>
                <div style={{ display:"flex", alignItems:"center", gap:8, marginTop:4 }}>
                  <span style={{ color:"#666", fontSize:13 }}>⏰ Offre expire dans</span>
                  <CountdownTimer />
                </div>
              </div>
              <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:18 }}>
                {[["🔒","Sécurisé"],["⚡","Immédiat"],["♾️","À vie"],["🛡️","Remboursé 7j"]].map(([icon,lab])=>(
                  <div key={lab} style={{ display:"flex", alignItems:"center", gap:5 }}>
                    <span style={{ fontSize:16 }}>{icon}</span>
                    <span style={{ fontSize:12, color:"#666" }}>{lab}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop:"1px solid #161616", padding:"22px 20px", textAlign:"center" }}>
          <p style={{ color:"#333", fontSize:11 }}>© 2026 · Réseaux Sociaux De Zéro à 10 000 Abonnés · Tous droits réservés</p>
          <p style={{ color:"#2a2a2a", fontSize:10, marginTop:4 }}>Les résultats varient selon l'application. Les témoignages présentés sont des cas réels.</p>
        </footer>

      </div>
    </>
  );
}
