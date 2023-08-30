// react
import React from 'react';

// qiao
import { cookie } from 'qiao.cookie.js';

// ui
import { Grid, gridInit, gridDel } from 'qiao-ui';

// photos service
import { photosAlbumList, photosAlbumDel } from '@services/photos';

// components
import { PhotosAlbumEdit } from './photos-album-edit.jsx';
import { PhotosAlbumSearch } from './photos-album-search.jsx';

// cols
const cols = ['ck', 'id', 'photos_album_name', 'photos_album_desc', 'photos_album_img', 'op'];

/**
 * photos album
 */
export const PhotosAlbum = () => {
  console.log('photos-view/src/photos-album: render');

  // init
  const init = async (data, pagenumber) => {
    // userinfo
    window.insistime_userinfo = {
      userid: cookie('insistime_userid'),
      usertoken: cookie('insistime_usertoken'),
    };

    // set
    const obj = await gridInit(photosAlbumList, data, pagenumber, cols);
    if (!obj) return;

    // return
    return {
      cols: cols,
      rows: obj.rows,
      sumpage: obj.sumpage,
      pagenumber: obj.pagenumber,
    };
  };

  // del
  const del = async (ids) => {
    return await gridDel(photosAlbumDel, ids);
  };

  return <Grid init={init} del={del} editModal={PhotosAlbumEdit} searchModal={PhotosAlbumSearch} />;
};
