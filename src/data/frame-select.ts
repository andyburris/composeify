import { TextboxAutocompleteOption } from "@create-figma-plugin/ui/lib/components/textbox/textbox-autocomplete/textbox-autocomplete"
import { Message } from "../common/transport";

export const keyFrameSelect = "frame-select"

export function handleFrameSelectRequest(term: String) {
    figma.skipInvisibleInstanceChildren = true;
    const options: Array<TextboxAutocompleteOption> = figma.root.children.flatMap(page => {
        let onlyFrames: SceneNode[] = page.children
            .filter(child => child.type in ["FRAME", "COMPONENT"])
            //.findAllWithCriteria({ types: ['FRAME', 'COMPONENT'] })
        let headerOption: TextboxAutocompleteOption = { header: page.name }
        let childrenOptions: TextboxAutocompleteOption[] = onlyFrames.map(child => { return { value: child.name } })
        return [headerOption, childrenOptions].flat()
    })
    figma.ui.postMessage(new Message(keyFrameSelect, options))
}