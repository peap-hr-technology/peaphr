"use client";

export default function Dashboard() {
return (
<div style={{ display: "flex", height: "100vh", background: "#080c14" }}>

{/* SIDEBAR */}
<aside style={{
width: "240px", background: "#0f1523",
borderRight: "1px solid rgba(255,255,255,0.06)",
display: "flex", flexDirection: "column", flexShrink: 0,
}}>
{/* Logo */}
<div style={{ padding: "20px 18px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
<svg viewBox="0 0 32 32" fill="none" width="28" height="28">
<circle cx="16" cy="16" r="4" fill="#4f8ef7"/>
<circle cx="16" cy="16" r="7" stroke="#4f8ef7" strokeWidth="1" fill="none" opacity="0.85"/>
<circle cx="16" cy="16" r="10.5" stroke="#4f8ef7" strokeWidth="0.8" fill="none" opacity="0.6" strokeDasharray="1.4 1.2"/>
<circle cx="16" cy="16" r="14" stroke="#4f8ef7" strokeWidth="0.6" fill="none" opacity="0.35" strokeDasharray="1.1 1.5"/>
</svg>
<div>
<div style={{ fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.04em" }}>
peap<span style={{ color: "#4f8ef7" }}>.hr</span>
</div>
<div style={{ fontSize: "0.6rem", color: "#4f8ef7", letterSpacing: "0.12em", textTransform: "uppercase" }}>SMB Edition</div>
</div>
</div>
</div>

{/* Nav */}
<nav style={{ flex: 1, padding: "12px 8px", overflowY: "auto" }}>
{[
{ label: "Dashboard", icon: "⬡", active: true },
{ label: "People", icon: "👥" },
{ label: "Analytics", icon: "◈" },
{ label: "Leave & Absence", icon: "🗓" },
{ label: "Payroll & Comp", icon: "💰" },
{ label: "Benefits", icon: "🎁" },
{ label: "Performance", icon: "⭐" },
{ label: "Pulse Surveys", icon: "💬" },
{ label: "Recognition", icon: "🏆" },
{ label: "peap Workshop", icon: "🔨" },
{ label: "Integrations", icon: "⬡" },
{ label: "Settings", icon: "⚙" },
].map((item) => (
<div key={item.label} style={{
display: "flex", alignItems: "center", gap: "9px",
padding: "8px 12px", borderRadius: "7px", cursor: "pointer",
color: item.active ? "#4f8ef7" : "#7a8aaa",
background: item.active ? "rgba(79,142,247,0.11)" : "transparent",
marginBottom: "1px", fontSize: "0.82rem",
}}>
<span>{item.icon}</span>
<span>{item.label}</span>
</div>
))}
</nav>

{/* User */}
<div style={{ padding: "14px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
<div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
<div style={{
width: "30px", height: "30px", borderRadius: "50%",
background: "linear-gradient(135deg,#4f8ef7,#a78bfa)",
display: "flex", alignItems: "center", justifyContent: "center",
fontSize: "0.65rem", fontWeight: 700, color: "#fff",
}}>SR</div>
<div>
<div style={{ fontSize: "0.78rem", fontWeight: 500 }}>Sarah Reynolds</div>
<div style={{ fontSize: "0.63rem", color: "#4e5d7a" }}>HR Admin</div>
</div>
</div>
</div>
</aside>

{/* MAIN */}
<div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

{/* Topbar */}
<div style={{
height: "54px", borderBottom: "1px solid rgba(255,255,255,0.06)",
display: "flex", alignItems: "center", padding: "0 24px",
}}>
<div style={{ fontWeight: 700, fontSize: "1rem" }}>Dashboard</div>
<div style={{ marginLeft: "auto", fontSize: "0.72rem", color: "#4e5d7a" }}>Apr 2026</div>
</div>

{/* Content */}
<div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>

{/* Stat Cards */}
<div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px", marginBottom: "24px" }}>
{[
{ label: "Total Headcount", value: "142", delta: "↑ +6 this month", color: "#4f8ef7" },
{ label: "Avg Engagement", value: "78%", delta: "↑ +3% vs last qtr", color: "#34d399" },
{ label: "Attrition Risk", value: "11", delta: "→ 2 high risk", color: "#f59e0b" },
{ label: "Open Roles", value: "8", delta: "↑ +2 this week", color: "#f472b6" },
].map((card) => (
<div key={card.label} style={{
background: "#0f1523", border: "1px solid rgba(255,255,255,0.06)",
borderRadius: "11px", padding: "18px", position: "relative", overflow: "hidden",
}}>
<div style={{
position: "absolute", top: 0, left: 0, right: 0, height: "2px",
background: `linear-gradient(90deg,${card.color},transparent)`
}}/>
<div style={{ fontSize: "0.63rem", textTransform: "uppercase", letterSpacing: "0.09em", color: "#4e5d7a", marginBottom: "8px" }}>{card.label}</div>
<div style={{ fontSize: "1.9rem", fontWeight: 800, lineHeight: 1 }}>{card.value}</div>
<div style={{ fontSize: "0.66rem", marginTop: "6px", color: card.color }}>{card.delta}</div>
</div>
))}
</div>

{/* Welcome */}
<div style={{
background: "#0f1523", border: "1px solid rgba(79,142,247,0.2)",
borderRadius: "11px", padding: "24px", textAlign: "center",
}}>
<div style={{ fontSize: "2rem", marginBottom: "12px" }}>🔵</div>
<div style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "6px" }}>Welcome to peap.hr</div>
<div style={{ color: "#7a8aaa", fontSize: "0.85rem" }}>Your HR platform is live. More pages coming soon.</div>
</div>

</div>
</div>
</div>
);
}