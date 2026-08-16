// ============================================================
// config.js — إعدادات Supabase (ملف موحّد لكل الصفحات)
// نظام ترشيح الدراسات العليا والبعثات
// ============================================================
const CONFIG = {
    SUPABASE_URL: "https://madotcsswnitqmrbklvh.supabase.co",
    SUPABASE_ANON_KEY: "sb_publishable_giW27EA5iFqnMIUK-zkWmQ_dH7IVWs7"
};

const supabaseClient = supabase.createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_ANON_KEY);
