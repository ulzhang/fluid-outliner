import React from "react"
import Octicon from "react-octicon"
import { Motion, spring } from "react-motion"
import {
    StyledComponentProps,
    Button,
    Menu,
    MenuItem,
    Divider,
    Typography,
} from "@material-ui/core"
import { INode } from "../models/Node"
import { palette } from "./styles/theme"
import { Observer } from "mobx-react"
import { autobind } from "core-decorators"
import { observable } from "mobx"
import { IOutlineVisitState } from "../models/OutlineVisitState"
import { INoteFormat } from "../models/Note"
import { withStyles } from "../utils/type-overrides"

const styles = {
    container: {
        display: "flex" as "flex",
        flexDirection: "row" as "row",
        position: "absolute" as "absolute",
        right: "5px",
        bottom: "5px",
    },
    menu: {
        position: "absolute" as "absolute",
        left: "100px",
        bottom: "-50px",
    },
    button: {
        padding: "5px",
        minWidth: 0,
        "&:hover $icon": {
            color: palette.primary.main,
        },
    },
    icon: {
        fontSize: "1.6rem",
        fontWeight: 100 as any,
        color: "slategray",
    },
}

export interface INodeActionToolbarProps
    extends StyledComponentProps<keyof typeof styles> {
    node: INode
    showNotes: () => void
    visitState: IOutlineVisitState
}

@withStyles<keyof typeof styles, INodeActionToolbarProps>(styles)
export class NodeActionToolbar extends React.Component<
    INodeActionToolbarProps
> {
    @observable private memoMenuAnchor: HTMLElement | null = null
    public render() {
        const { classes, node } = this.props
        return (
            <Motion
                defaultStyle={{ opacity: 0 }}
                style={{ opacity: spring(1) }}
            >
                {({ opacity }) => (
                    <Observer>
                        {() => (
                            <div
                                className={classes!.container}
                                style={{ opacity }}
                            >
                                <Button
                                    onClick={node.toggleBookmark}
                                    className={classes!.button}
                                >
                                    <Octicon
                                        name="bookmark"
                                        className={classes!.icon}
                                    />
                                </Button>
                                <Button
                                    onClick={this.handleMemoMenuControlClick}
                                    className={classes!.button}
                                >
                                    <Octicon
                                        name="file"
                                        className={classes!.icon}
                                    />
                                    <Octicon
                                        name="chevron-down"
                                        className={classes!.icon}
                                    />
                                </Button>
                                {this.memoMenuAnchor && (
                                    <Menu
                                        open={!!this.memoMenuAnchor}
                                        onClose={this.hideMemoMenu}
                                        anchorEl={this.memoMenuAnchor}
                                    >
                                        <li
                                            style={{
                                                outline: 0,
                                                background: "#f1f0f0",
                                                marginTop: "-8px",
                                                borderTop: "1px solid silver",
                                            }}
                                        >
                                            <Typography
                                                variant="body1"
                                                style={{
                                                    textAlign: "center",
                                                    padding: "10px",
                                                }}
                                            >
                                                Add Memo
                                            </Typography>
                                        </li>
                                        <Divider />
                                        <MenuItem
                                            onClick={this.addMarkdownMemo}
                                        >
                                            Markdown
                                        </MenuItem>
                                        <MenuItem
                                            onClick={this.addRichTextMemo}
                                        >
                                            Rich Text
                                        </MenuItem>
                                    </Menu>
                                )}
                                <Button
                                    onClick={node.toggleStar}
                                    className={classes!.button}
                                >
                                    <Octicon
                                        name="star"
                                        className={classes!.icon}
                                    />
                                </Button>
                            </div>
                        )}
                    </Observer>
                )}
            </Motion>
        )
    }

    @autobind
    private handleMemoMenuControlClick(event: React.MouseEvent<any>) {
        this.memoMenuAnchor = event.currentTarget
    }

    @autobind
    private addMemo(format: INoteFormat) {
        const memo = this.props.node.addMemo(format)
        this.props.visitState.activateItem(memo)
        this.hideMemoMenu()
        this.props.showNotes()
    }

    @autobind
    private addMarkdownMemo() {
        this.addMemo("markdown")
    }

    @autobind
    private addRichTextMemo() {
        this.addMemo("html")
    }

    @autobind
    private hideMemoMenu() {
        this.memoMenuAnchor = null
    }
}
