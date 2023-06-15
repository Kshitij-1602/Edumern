import React, { Fragment, useState } from 'react'
import {
    Fab,
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
} from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addComment } from '../../actions/post'

const CreateComment = ({ postId, addComment }) => {
    const [text, setText] = useState('')
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
        setText('')
    }
    const handleSubmit = () => {
        addComment(postId, { text })
        console.log(postId)
        console.log(text)
        handleClose()
    }
    return (
        <Fragment>
            <div style={addStyle}>
                <Fab
                    onClick={() => setOpen(true)}
                    size="medium"
                    color="primary"
                    aria-label="new_thread"
                >
                    <Add />
                </Fab>
            </div>
            <Dialog fullWidth={true} maxWidth="md" open={open} onClose={handleClose}>
                <DialogTitle>New Comment</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        name="comment"
                        label="Comment"
                        multiline
                        rows={10}
                        variant="outlined"
                        onChange={e => setText(e.target.value)}
                        value={text}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button color="primary" onClick={handleSubmit}>
                        Sumbit
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}

const addStyle = {
  float: "right",
  margin: "13px",
};

CreateComment.propTypes = {
    addComment: PropTypes.func.isRequired
}
export default connect(null, { addComment })( CreateComment )