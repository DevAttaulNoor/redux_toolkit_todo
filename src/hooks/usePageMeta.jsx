import { useEffect } from "react";

export const usePageMeta = (meta) => {
    useEffect(() => {
        if (meta?.title) document.title = meta.title;
        if (meta?.description) {
            const metaTag = document.querySelector('meta[name="description"]');
            if (metaTag) metaTag.setAttribute("content", meta.description);
        }
    }, [meta]);
};