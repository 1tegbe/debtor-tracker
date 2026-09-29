"use client";

import { useState } from "react";
import { supabase } from "@/Lib/supabase.js";

export default function AddTo() {
    const [message, setMessage] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    const addTo = async () => {
        setIsSaving(true);
        setMessage("");

        const { data,error } =await supabase
            .from("database_new")
            .insert({ name: "divine akinlade" });

        setIsSaving(false);
        setMessage(error ? error.message : "Record added successfully.");
    };

    return (
        <main className="min-h-screen p-8">
            <button type="button" onClick={addTo} disabled={isSaving}>
                {isSaving ? "Adding..." : "Add record"}
            </button>
            {message && <p role="status">{message}</p>}
        </main>
    );
}