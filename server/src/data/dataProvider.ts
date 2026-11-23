import { CorpseData } from "./initialize";
import {  db, get, getGraveyard, post, postDeath, put, remove, validProperties } from "./manipulate";

export type RequestBody = {
	pid: string;
	saveSlot: number;
	data: any;
}
export const getSaveState = async (req: RequestBody) => {
	const gooberts = get(getUserSlot(req.pid, req.saveSlot));
	const graveyard = getGraveyard(getUserSlot(req.pid, req.saveSlot));
	console.log("Graveyard:", graveyard)
	const saveState = {
		gooberts: gooberts,
		graveyard: graveyard
	}
	return saveState;
}
export const createGoobert = async (req: RequestBody) => {
	post(getUserSlot(req.pid, req.saveSlot), req.data);

	return getSaveState(req);
}
export const postToGraveyard = async (req: RequestBody) => {
	const goobert = req.data;
	const corpse: CorpseData = {
		name: goobert.name,
		id: goobert.id,
		appearance: goobert.appearance
	}
	postDeath(getUserSlot(req.pid, req.saveSlot), corpse);

	return getSaveState(req);
}
export const updateGoobertProperty = async (req: RequestBody) => {
	const goobertId = req.data.goobertId;
	const property = req.data.stat;
	const value = req.data.value;
	put(getUserSlot(req.pid, req.saveSlot), goobertId, property, value);

	return getSaveState(req);
}
export const updateGoobert = async (req: RequestBody) => {
	if (!req.pid || req.saveSlot === undefined) {
        throw new Error("Missing pid or saveSlot in updateGoobert request");
    }

	const goobert = req.data;

	const user_slot = getUserSlot(req.pid, req.saveSlot);

	for(let property of validProperties) {
		// console.log({
		// 	expectedId: goobert.id,
		// 	expectedSlot: user_slot,
		// 	found: db.prepare(`
		// 		SELECT *
		// 		FROM gooberts
		// 		WHERE user_slot = ? AND id = ?
		// 	`).get(user_slot, goobert.id)
		// });

		const result = put(
			user_slot,
			goobert.id,
			property,
			goobert[property]
		);

		// console.log(
		// 	`Updating ${property}:`,
		// 	goobert[property],
		// 	"| Changes:",
		// 	result?.changes
		// );

	}

	return getSaveState(req);
}

export const deleteGoobert = async (req: RequestBody) => {
	const goobert = req.data;
	remove(getUserSlot(req.pid, req.saveSlot), goobert.id);

	return getSaveState(req);
}

const getUserSlot = (userId: string, saveSlot: number) => {
	return userId + "_slot" + saveSlot;
}