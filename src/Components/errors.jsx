

export default function MessageError({error}) {
    return error.text.type === "required" ? <span className="text-red-500 bg-red-100 font-bold text-sm leading-tight mt-2 mb-2 px-4 py-2 border-red-500 border-solid border-2 rounded-md opacity-75">Le champ est vide. Veuillez écrire le tweet qui doit être ajouté.</span> : <span className="text-red-500 bg-red-100 font-bold text-sm leading-tight mt-2 mb-2 px-4 py-2 border-red-500 border-solid border-2 rounded-md opacity-75">
Le champ doit avoir au plus 100 caractères.</span>
}