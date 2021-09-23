import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { deletePost } from '../../redux/slice/getTimelinePosts';

interface Props {
  isOwner: boolean;
  postId: string;
}

export default React.memo(function PostMenu({ isOwner, postId }: Props) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false); //delete dialog

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteClick = () => {
    setOpen(true);
  };

  const handleDeleteClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <MoreHorizIcon
        fontSize='large'
        color='action'
        onClick={handleMenuClick}
      />
      {isOwner ? (
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
          <div>
            <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
            <Dialog
              open={open}
              onClose={() => {
                handleDeleteClose();
                handleMenuClose();
              }}
              aria-labelledby='alert-dialog-title'
              aria-describedby='alert-dialog-description'
            >
              <DialogTitle id='alert-dialog-title'>{'Warning'}</DialogTitle>
              <DialogContent>
                <DialogContentText id='alert-dialog-description'>
                  Are you sure to delete this post?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={() => {
                    handleDeleteClose();
                    handleMenuClose();
                  }}
                  color='primary'
                >
                  No
                </Button>
                <Button
                  onClick={() => {
                    handleDeleteClose();
                    handleMenuClose();
                    dispatch(deletePost(postId));
                  }}
                  color='primary'
                >
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </Menu>
      ) : (
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {' '}
          <MenuItem onClick={handleMenuClose}>Save Post</MenuItem>
          <MenuItem onClick={handleMenuClose}>Report Post</MenuItem>
        </Menu>
      )}
    </Container>
  );
});

const Container = styled.div`
  margin-right: 20px;
`;
