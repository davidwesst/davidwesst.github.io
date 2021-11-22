const generateSlug = (str) => {
    const safeCharacterList = /[^\w-]/gi;
    const slug = str.toLowerCase().replace(/\s/gi, '-').replace(safeCharacterList, '');

    return slug;
};
export default generateSlug;