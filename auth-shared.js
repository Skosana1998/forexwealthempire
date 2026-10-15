
(() => {
  function client() {
    if (!window.supabase) {
      throw new Error("Supabase library did not load. Check your internet connection.");
    }

    const url = window.LDU_SUPABASE_URL;
    const key = window.LDU_SUPABASE_ANON_KEY;

    if (!url || !key || url.includes("PASTE_YOUR") || key.includes("PASTE_YOUR")) {
      throw new Error("Check the Project URL and publishable key in auth-config.js.");
    }

    if (!window.lduSupabase) {
      window.lduSupabase = window.supabase.createClient(url, key, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true
        }
      });
    }

    return window.lduSupabase;
  }

  function message(element, text, type = "error") {
    element.textContent = text;
    element.className = "message " + type;
    element.hidden = false;
  }

  window.LDUAuth = { client, message };
})();
