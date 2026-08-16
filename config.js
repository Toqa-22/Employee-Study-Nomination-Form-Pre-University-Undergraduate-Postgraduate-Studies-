// ============================================================
// config.js — إعدادات Supabase (ملف موحّد لكل الصفحات)
// نظام ترشيح الدراسات العليا والبعثات
// ============================================================
const CONFIG = {
    SUPABASE_URL: "https://madotcsswnitqmrbklvh.supabase.co",
    SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hZG90Y3Nzd25pdHFtcmJrbHZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY4ODAzNjcsImV4cCI6MjEwMjQ1NjM2N30.HA-RcMaN-Ol4xSx6q8W57K673A4PSc503JKqMAEUR6k"
};

const supabaseClient = supabase.createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_ANON_KEY);
