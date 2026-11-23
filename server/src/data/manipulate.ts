import Database from "better-sqlite3";
import { CorpseData, GoobertData } from "./initialize";

export const db = new Database("./dist/gooberts.db");

// POST
const goobertInsert = db.prepare(`
    INSERT OR IGNORE INTO gooberts (
        user_slot, id, name, room,

        mutant_type, 
        fullness, entertainment, awakeness, cleanliness,

        appearance, accessories
    ) VALUES (
        ?, ?, ?, ?, 
        
        ?, 
        ?, ?, ?, ?, 

        ?, ?
    )
`);
export const post = (user_slot: string, goobert: GoobertData) => {
    goobert.name, goobert.room,
    goobertInsert.run(
        user_slot, goobert.id, goobert.name, goobert.room, 

        goobert.mutantType,
        goobert.fullness, goobert.entertainment, goobert.awakeness, goobert.cleanliness,

        goobert.appearance, goobert.accessories
    );
}
const graveyardInsert = db.prepare(`
    INSERT OR IGNORE INTO graveyard (
        user_slot, id, name,

        appearance
    ) VALUES (
        ?, ?, ?,

        ?
    )
`);
export const postDeath = (user_slot: string, goobert: CorpseData) => {
    graveyardInsert.run(user_slot, goobert.id, goobert.name, goobert.appearance);
}
// GET
const selectAll = db.prepare(`
    SELECT 
        uid, user_slot, id, name, room,

        mutant_type, 
        fullness, entertainment, awakeness, cleanliness,

        appearance, accessories
    FROM gooberts
    WHERE user_slot = ?
`);
export const get = (user_slot: string) => {
    let data = selectAll.all(user_slot);
    return data;
}
const selectGraveyard = db.prepare(`
    SELECT 
        uid, user_slot, id, name,

        appearance
    FROM graveyard
    WHERE user_slot = ?
`);
export const getGraveyard = (user_slot: string) => {
    let data = selectGraveyard.all(user_slot);
    return data;
}

// PUT
export const validProperties = [
    "room",
    "is_mutant",
    "mutant_type",
    "sleeping", 
    "fullness", 
    "entertainment", 
    "awakeness", 
    "cleanliness",
    "appearance", 
    "accessories"
];
export const put = (user_slot: string, id: string, property: string, value: number | string) => {
    if(!validProperties.includes(property)) return;
    const updateOne = db.prepare(`
        UPDATE gooberts
        SET ${property} = ?
        WHERE user_slot = ? AND id = ?
    `);
    return updateOne.run(value, user_slot, id);
};

// DELETE
const deleteOne = db.prepare(`
    DELETE FROM gooberts WHERE user_slot = ? AND id = ?
`);
export const remove = (user_slot: string, id: string) => {
    deleteOne.run(user_slot, id);
}