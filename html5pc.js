var $estr = function () {
  return js.Boot.__string_rec(this, "");
};
function $extend(from, fields) {
  function inherit() {}
  inherit.prototype = from;
  var proto = new inherit();
  for (var name in fields) proto[name] = fields[name];
  return proto;
}
var CData = function () {};
CData.__name__ = true;
CData.prototype = { __class__: CData };
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return c.toString(36);
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "[2-9ab]";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    'var FlipBook=function(){2.currentOrgY=0;2.currentOrgX=0;2.moveDY=0;2.moveDX=0;2.zoomLevel=1;2.6="";2.bAbortMouseDown=3;2.bCanGestureZoom=true;2.bStartNoteGesture=3;2.currentNote=7;2.bStartNote=3;2.bStartHighLightGesture=3;2.currentHighLight=7;2.bStartHighLight=3;2.gestureLastY=-1;2.gestureLastX=-1;2.gestureMoveY=0;2.gestureMoveX=0;2.currentMoveY=0;2.currentMoveX=0;2.init_moveY=0;2.init_moveX=0;2.totalLast=0;2.totalDistance=0;2.last_moveY=0;2.last_moveX=0;2.page_offsetY=0;2.page_offsetX=0;2.realScale=1;2.totalGeustureScale=0;2.gestureScale=1;2.startMoveGesture=3;2.startFingerDistance=0;2.startZoomGesture=3;2.rightPageNum=-1;2.leftPageNum=-1;2.bookContext=8 4.BookContext();2.tweener=8 4.Tweener();2.currentPageNum=0;2.zoomStatus=4.ZoomStatus.normal;2.6="position:absolute;left:9;top:9;width:a%;height:a%;overflow: hide;-b-tap-highlight-color: rgba(5, 5, 5, 0);-b-user-select: none;"};',
    [],
    12,
    "||this|false|core|255|zoomCSS|null|new|0px|100|webkit".split("|"),
    0,
    {}
  )
);
FlipBook.__name__ = true;
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < 62 ? "" : e(parseInt(c / 62))) +
        ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "([4-9abdfgkmoqruvzA-KM-Z]|[1-6]\\w)";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    '3h.prototype={5p:8(x,y){5(x.B>y.B)a 1;5(x.B==y.B)a 0;a-1},5q:8(e){5(4.X.b.J==0)a;4.13();5(4.1a==4.44){4.1I();a}4.1X("K");4.1Y("BookmarkView");4.1a=4.44;6 K=7.d.K;6 lv=!4.2q(4.1c)&&4.1c!=-1;6 rv=!4.2q(4.1d)&&4.1d!=-1;K.sort($g(4,4.5p));6 U=u.14.2y(K,7.1P,lv,rv);5(7.d.1k)U=u.14.2y(K,7.1P,rv,lv);4.M.Q=U;4.M.b.G="1t";4.1J()},3i:8(){4.1K=v;4.3j.b.2z=""},5r:8(e){5(4.X.b.J==0)a;4.13();5(4.1a==4.46){4.1I();a}4.1X("about");4.1a=4.46;4.1Y("AboutUs");5(7.2N!=9){6 U=u.14.toAboutHtml(7.aboutInfo,7.bookInfo);4.M.Q=U;4.M.b.G="1t"}4.1J()},3k:8(){4.1L=v;4.3l.b.2z=""},47:8(e){5(4.X.b.J==0)a;4.3i();4.1L=!4.1L;5(4.1L)4.3l.b.2z="#5s";q 4.3l.b.2z="";4.1J()},48:8(e){5(4.X.b.J==0)a;5(e!=9){e.1l();e.1Q();4.1K=!4.1K}q 4.1K=v;4.3k();5(4.1K)4.3j.b.2z="#5s";q 4.3j.b.2z="";4.1J()},5t:8(){4.49=v;4.5u=0;4.1R=v;4.page_offsetX=0;4.page_offsetY=0;4.last_moveX=0;4.last_moveY=0;4.init_moveX=0;4.init_moveY=0},5v:8(){6 1u=4.4a();6 1j=S 1S();6 m=0,A=1u.O;11(m<A){6 i=m++;6 V=1u[i];6 4b=0,5w=7.d.1j.O;11(4b<5w){6 j=4b++;6 4c=7.d.1j[j];5(4c.id==V.id)4c.updateLayout(V)}}},4a:8(){6 1u=S 1S();5(4.1B!=9){6 c=4.1B.childNodes;6 m=0,A=c.O;11(m<A){6 i=m++;1u.1v(c[i])}}a 1u},hackHtmlDom:8(f){f.12=$g(4,4.1e);f.2A=$g(4,4.1e);f.2O=$g(4,4.1e);f.2P=$g(4,4.1e);f.2Q=$g(4,4.1e);f.4e=$g(4,4.1e);f.4f=$g(4,4.1e);f.4g=$g(4,4.1e);f.4h=$g(4,4.1e);f.4i=$g(4,4.1e);f.5x=$g(4,4.1e)},5y:8(){6 1u=4.4a();6 m=0,A=1u.O;11(m<A){6 i=m++;6 f=1u[i]}},showPopupAudio:8(f){f.5z=f.5A;6 B=f.B;6 2R=S u.AudioInfo();2R.B=B;2R.5z=f.5A;4.3m.Q="";4.3m.Q=u.14.4j(2R,N);6 5B=C.D.I.5C("3m").2S("2R")[0];5B.play()},3n:8(){6 22=S 1S();5(7.d!=9&&7.d.22!=9){6 16=0;5(4.H!=9)16=4.H;6 m=0,A=7.d.22.O;11(m<A){6 i=m++;6 f=7.d.22[i];5(f.B==16)22.1v(f)}}4.r.22=22},3o:8(){6 23=S 1S();5(7.d!=9&&7.d.23!=9){6 16=0;5(4.H!=9)16=4.H;6 m=0,A=7.d.23.O;11(m<A){6 i=m++;6 f=7.d.23[i];5(f.B==16)23.1v(f)}}4.r.23=23},4k:8(){6 24=S 1S();5(7.d!=9&&7.d.24!=9){6 16=0;5(4.H!=9)16=4.H;6 m=0,A=7.d.24.O;11(m<A){6 i=m++;6 f=7.d.24[i];5(f.B==16)24.1v(f);q 5(f.layer=="foreground")24.1v(f)}}4.r.24=24},5D:8(){6 25=4.5E();5(25.2r!=9||25.4l!=9){4.3m.Q=u.14.4j(25.2r,N);4.cvsRightPageBgAudio.Q=u.14.4j(25.4l,v)}q 7.clearBgAudio()},5F:8(f){4.1B.Q+=u.14.toVideoHtml(f)},4m:8(){4.5G();6 1j=4.r.1j;5(1j!=9){6 m=0,A=1j.O;11(m<A){6 i=m++;6 f=1j[i];4.5F(f)}}4.5y()},4n:8(){4.1B.Q=""},5H:8(f){4.5I.Q+=u.14.toSlideshow(f)},5J:8(){6 1M=4.r.4o;5(1M!=9){6 m=0,A=1M.O;11(m<A){6 i=m++;6 f=1M[i];4.5H(f);f.startTweener()}}},4p:8(){4.5I.Q="";6 1M=4.r.4o;5(1M!=9){6 m=0,A=1M.O;11(m<A){6 i=m++;6 f=1M[i];f.stopTweener()}}},4q:8(e){4.X.b.1T="J:"+7.4r+";  -1C-1D: 0.3s 3p-3q; ";4.2T.b.1T="J:"+1+"; -1C-1D: 0.3s 3p-3q; ";4.2T.b.G="2U-1t";4.bottomBarBg.b.J=7.4r;4.topMenuBar.b.G="2U-1t";4.5K=v;7.5L(N)},5M:8(){5(4.2T.b.G=="2U-1t")a"1";q a"0"},2V:8(e,4s,3r){5(3r==9)3r=v;5(4s==9)4s=N;5(e!=9){6 t=e.target;5(t==4.2B||t==4.3t||t==4.5N||t==4.5O||t==4.5P||t==4.5Q||t==4.3u||t==4.3v||t==4.3w||t==4.imgLogo)a}5(3r){4.X.b.1T="J:0 ; ";4.2T.b.1T="J: 0 ;"}q{4.X.b.1T="J:0 ; -1C-1D: 0.3s 3p-3q; ";4.2T.b.1T="J: 0 ; -1C-1D: 0.3s 3p-3q; ";4.5K=v}7.5L(v)},5E:8(){6 25=7.d.25;6 4t={2r:9,4l:9};6 pg=4.1N();6 m=0,A=25.O;11(m<A){6 i=m++;6 f=25[i];5(f.B==pg)4t.2r=f}a 4t},4u:8(17){6 1f="";6 pg=4.1N();6 m=0,A=17.O;11(m<A){6 i=m++;6 f=17[i];5(f.1m==pg){1f+="<br />";1f+="<br />";1f+="==== Page "+2C.2X(pg+1)+" ====";1f+="<br />";1f+="<br />";1f+=f.2Y;1f+="<br />";1f+="<br />";break}}1f=3x.replace(1f,"\\n","<br />");a 1f},5R:8(17){6 1f=4.4u(17);4.1E.Q=1f;4.1E.3y=0},5S:8(){7.5T($g(4,4.5R))},5U:8(17){6 1f=4.4u(17);4.1X("2D");4.1Y("FullText");4.1a=4.4v;4.1E.Q=1f;4.1E.3y=0},5V:8(e){5(4.X.b.J==0)a;4.13();5(4.1a==4.4v){4.1I();a}4.1J();7.5T($g(4,4.5U))},5W:8(e){5(4.X.b.J==0)a;4.26(9,9)},4w:8(e){5(4.X.b.J==0)a;5(4.1w.1n!=""){4.1w.1n="";4.1w.b.G="1o"}5(4.1U.1n!=""){4.1U.1n="";4.1U.b.G="1o"}4.13(v);4.1I();5(4.2Z==N){4.2Z=v;4.2B.b.J=1}q{4.2Z=N;4.2B.b.J=7.autoflipButtonUnselectedAlpha;4.2t=S u.4x();6 F=4;6 5X=50*7.d.autoFlipSecond;4.2t.3z=8(2b){5(2b%5X!=0)a;5(F.2Z==v)a;5(F.5Y()==N){5(7.d.1k)F.31(-1);q F.31(1)}q F.13()};4.2t.4y(1000000)}},5Y:8(){6 1m=4.1N();a 1m<7.d.17.O-1},3A:8(1m){5(7.enablePreload==v)a;7.d.3A(1m)},13:8(3B){5(3B==9)3B=N;5(4.2t!=9){4.2t.3z=9;4.2t.5Z();4.2t=9}5(3B==N){4.2Z=v;4.2B.b.J=1}},2q:8(B){6 i=0;6 m=0,A=7.d.K.O;11(m<A){6 i1=m++;5(B==7.d.K[i1].B)a N}a v},3C:8(){6 4z=S 1S();5(7.d!=9&&7.d.K!=9){6 m=0,A=7.d.K.O;11(m<A){6 i=m++;6 bm=7.d.K[i];5(bm.B==4.H+1)4z.1v(bm)}}4.r.K=4z},addBookmark:8(2E,2D){5(2E==9)2E=0;6 27=S u.Bookmark();5(2E==-1){5(7.d.1k)27.B=4.1d;q 27.B=4.1c}q 5(2E==1){5(7.d.1k)27.B=4.1c;q 27.B=4.1d}q 5(2E==0)27.B=4.1N()+1;27.2D=2D;27.4B();7.d.K.1v(27.4C());6 K=7.d.K;6 lv=!4.2q(4.1c)&&4.1c!=-1;6 rv=!4.2q(4.1d)&&4.1d!=-1;6 U=u.14.2y(K,7.1P,lv,rv);5(7.d.1k)U=u.14.2y(K,7.1P,rv,lv);4.M.Q=U},60:8(B){6 i=0;6 4D=S 1S();6 3D=9;6 m=0,A=7.d.K.O;11(m<A){6 i1=m++;haxe.Log.trace(7.d.K[i1].B,{fileName:"3h.hx",lineNumber:2021,className:"3h",methodName:"60"});5(B+1!=7.d.K[i1].B)4D.1v(7.d.K[i1]);q 3D=7.d.K[i1]}5(3D!=9)3D.remove();7.d.K=4D;6 K=7.d.K;6 lv=!4.2q(4.1c)&&4.1c!=-1;6 rv=!4.2q(4.1d)&&4.1d!=-1;6 U=u.14.2y(K,7.1P,lv,rv);5(7.d.1k)U=u.14.2y(K,7.1P,rv,lv);4.M.Q=U},1N:8(){6 1m=0;5(4.H!=9)1m=4.H;a 1m},61:8(17){6 3E=[];6 m=0,A=17.O;11(m<A){6 i=m++;6 f=17[i];5(f.2Y==9||f.2Y=="")continue;5(f.4E==9)f.4E=f.2Y.62();6 63=64.65.66.searchPos(f.4E,4.33);3E=3E.concat(64.65.66.createSearchResults(f.2Y,4.33,63,2C.parseInt(f.id)))}a 3E},67:8(17){5(4.33=="")a;6 1u=4.61(17);6 V=4.M;6 4F=V.2S("div")[1];5(1u==9||1u.O==0)4F.Q="0 "+L.s("SearchResults","68 Results")+".";q 4F.Q=u.14.toSearchResultHtml(1u)},4G:8(){6 V=4.M;6 2F=V.2S("2v")[0];a 2F},unlockPage:8(){6 V=4.69;6 2F=V.2S("2v")[0];6 1x=2F.34;1x=3x.4H(1x);7.tryUnlock(1x)},inputPwd:8(){6 V=4.69;6 2F=V.2S("2v")[0];6 1x=2F.34;1x=3x.4H(1x);7.tryPwd(1x)},4I:8(){6 2v=4.4G();6 1x=2v.34;1x=3x.4H(1x);5(1x=="")a;4.33=1x.62();7.requestSearch($g(4,4.67));7.logSearch(4.33)},6a:8(e){4.13();6 E=4.3w;E.34=""},6b:8(e){5(4.X.b.J==0)a;4.13();5(4.1a==4.3u){4.1I();a}4.1X("4I");4.1Y("68");4.1a=4.3u;6 U=u.14.toSearchHtml();4.M.Q=U;4.M.b.G="1t";4.1J()},6c:8(e){5(4.X.b.J==0)a;4.13();5(4.1a==4.3v){4.1I();a}4.1X("thumbs");4.1Y("ThumbnailView");4.1a=4.3v;6 U=u.14.toThumbsHtml(7.d.17);4.M.Q=U;4.M.b.G="1t";4.1J()},1J:8(){6 3F=v;5(7.R<600)3F=N;5(C.D.1F.6d.6e.6f("iPhone")!=-1)3F=N;5(3F)4.2V()},6g:8(e){5(4.X.b.J==0)a;4.13();5(4.1a==4.3t){4.1I();a}4.1X("toc");4.1a=4.3t;4.1Y("TableOfContents");5(7.2N!=9){6 U=u.14.toContentsHtml(7.2N);4.M.Q=U;4.M.b.G="1t"}4.1J()},6h:8(e){5(4.X.b.J==0)a;4.13();5(4.1a==4.4J){4.1I();a}4.1X("sns");4.1a=4.4J;4.1Y("ShareOnSocialNetwork");5(7.2N!=9){6 U=u.14.toSnsHtml(7.shareInfo);4.M.Q=U;4.M.b.G="1t"}4.1J()},6i:8(e){5(4.X.b.J==0)a;4.13();5(4.1a==4.4K){4.1I();a}4.1X("email");4.1a=4.4K;4.1Y("ShareThisFlipBook");5(7.2N!=9){6 U=u.14.toEmailHtml();4.M.Q=U;4.M.b.G="1t"}4.1J()},6j:8(){6 t=S u.4x();6 F=4;t.4y(10);t.3z=8(2b){5(2b==10){6 2v=F.4G();2v.focus()}}},1X:8(2w){5(2w==9)2w="";4.3k();4.3i();6 V=4.4L;V.b.35="0px";6 4M=30;6 35=300;4.2c(4.M,v);4.2c(4.1E,v);5(2w=="2D"){4N.setTopBarMaxSize(V);4N.setTopFullTextContentMaxSize(4.1E);35=7.1p-45|0;4M=4M/10|0}q 4N.setTopBarDefaultSize(V);6 t=S u.4x();6 F=4;F.2c(F.M,v);V.b.35=2C.2X(35)+"px";5(2w=="2D")F.2c(F.1E,N);q F.2c(F.M,N);5(2w=="4I")F.6j();4.2c(4.4L,N);4.M.Q=""},1Y:8(2e){6 V=C.D.I.5C("topTitle");V.Q=L.s(2e)},2c:8(V,2e){5(2e==N)V.b.G="2U";q V.b.G="1o"},1I:8(){4.2c(4.4L,v);4.1a=9},5G:8(){6 1j=S 1S();5(7.d!=9&&7.d.1j!=9){6 16=0;5(4.H!=9)16=4.H;6 m=0,A=7.d.1j.O;11(m<A){6 i=m++;6 f=7.d.1j[i];5(f.B==16)1j.1v(f)}}4.r.1j=1j},3G:8(){6 4O=S 1S();5(7.d!=9&&7.d.36!=9){6 16=0;5(4.H!=9)16=4.H;6 m=0,A=7.d.36.O;11(m<A){6 i=m++;6 f=7.d.36[i];5(f.B==16)4O.1v(f)}}4.r.36=4O},3H:8(){6 1M=S 1S();5(7.d!=9&&7.d.4P!=9){6 16=0;5(4.H!=9)16=4.H;6 m=0,A=7.d.4P.O;11(m<A){6 i=m++;6 f=7.d.4P[i];5(f.B==16)1M.1v(f)}}4.r.4o=1M;4.5J()},clearCtxNote:8(){4.r.22=9},clearCtxHighLight:8(){4.r.23=9},6k:8(){4.r.24=9},6l:8(){4.r.36=9},4Q:8(e){e.1l();6 E=e;6 k=E.1V.f(0);6 4R=4.6m-k.Y;4.M.3y+=1O.6n(4R)|0;4.1E.3y+=1O.6n(4R)|0},37:8(e){4.6o=v},4S:8(e){4.6o=N;6 E=e;6 k=E.1V.f(0);4.6m=k.Y},4T:8(e){e.1Q()},4U:8(e){e.1Q()},4V:8(e){e.1Q()},move:8(W,1b){4.r.W+=W;4.r.1b+=1b;4.5v();4.r.1W()},3I:8(e){4.4W=N;6 t=e;5(t.2w=="mousemove"){4.6p(e);a}5(7.6q())a;5(4.1K){e.1l();6 E=e;6 k=E.1V[0];4.1g=k.18;4.1h=k.Y;5(4.o==9)a;5(1O.2f(4.1g-4.o.Z)<=10||1O.2f(4.1h-4.o.ty)<=10)a;4.o.28=4.1g-4.o.Z;4.o.29=4.1h-4.o.ty;4.38().3J(0,0,C.D.1F.I.P.R,C.D.1F.I.P.1p);4.r.1W();4.o.3K(4.38());a}5(4.1L){e.1l();6 E=e;6 k=E.1V[0];4.1g=k.18;4.1h=k.Y;4.z.28=32;4.z.29=32;4.39().3J(0,0,C.D.1F.I.P.R,C.D.1F.I.P.1p);4.r.1W();4.z.3K(4.39());a}6 E=e;6 k=E.1V[0];6 3L=E.1V[1];6 2g=S 3M();6 W=k.2h-4.2G;6 1b=k.2i-4.2H;5(!4.4X())E.1l();5(4.1q==u.1r.1H&&E.1V.O==1){5(4.1y+W>C.D.I.P.R/2)W=C.D.I.P.R/2-4.1y;5(4.1y+W<-C.D.I.P.R/2)W=-C.D.I.P.R/2-4.1y;5(4.1z+1b>C.D.I.P.1p/2)1b=C.D.I.P.1p/2-4.1z;5(4.1z+1b<-C.D.I.P.1p/2)1b=-C.D.I.P.1p/2-4.1z;4.3N.b.1T=4.4Y(W|0,1b|0,v);4.3a=W|0;4.3b=1b|0}q 5(4.1q!=u.1r.1H&&E.1V.O==1&&1O.2f(C.D.1F.6r-7.R)<10){4.1w.1n="";4.1w.b.G="1o";4.1U.1n="";4.1U.b.G="1o";5(W>20){4.3O(9);4.2a=v}q 5(W<-20){4.3P(9);4.2a=v}4.26(9,9);E.1l();4.1R=v}4.3Q=k.2h;4.3R=k.2i},6p:8(e){5(7.6q())a;5(4.1K){e.1l();6 E=e;6 k=E;4.1g=k.18;4.1h=k.Y;5(4.o==9)a;5(1O.2f(4.1g-4.o.Z)<=10||1O.2f(4.1h-4.o.ty)<=10)a;4.o.28=4.1g-4.o.Z;4.o.29=4.1h-4.o.ty;4.38().3J(0,0,C.D.1F.I.P.R,C.D.1F.I.P.1p);4.r.1W();4.o.3K(4.38());a}5(4.1L){e.1l();6 E=e;6 k=E;4.1g=k.18;4.1h=k.Y;4.z.28=32;4.z.29=32;4.39().3J(0,0,C.D.1F.I.P.R,C.D.1F.I.P.1p);4.r.1W();4.z.3K(4.39());a}6 E=e;6 k=E;6 2g=S 3M();6 W=k.2h-4.2G;6 1b=k.2i-4.2H;5(!4.4X())E.1l();5(4.1q==u.1r.1H&&4.1R){5(4.1y+W>C.D.I.P.R/2)W=C.D.I.P.R/2-4.1y;5(4.1y+W<-C.D.I.P.R/2)W=-C.D.I.P.R/2-4.1y;5(4.1z+1b>C.D.I.P.1p/2)1b=C.D.I.P.1p/2-4.1z;5(4.1z+1b<-C.D.I.P.1p/2)1b=-C.D.I.P.1p/2-4.1z;4.3N.b.1T=4.4Y(W|0,1b|0,N);4.3a=W|0;4.3b=1b|0}5(4.1q!=u.1r.1H&&4.1R&&1O.2f(C.D.1F.6r-7.R)<10){4.1w.1n="";4.1w.b.G="1o";4.1U.1n="";4.1U.b.G="1o";5(W>0){4.3O(9);4.2a=v}q 5(W<0){4.3P(9);4.2a=v}4.26(9,9);E.1l();4.1R=v}e.1Q();e.1l();4.3Q=k.2h;4.3R=k.2i},4X:8(){6 1m=0;5(4.H!=9)1m=4.H;6 19=7.2j(1m);a 19.canZoom},2I:8(e){4.4W=v;5(4.1K&&4.1g!=-1&&4.1h!=-1){6 E=e;e.1l();5(4.1g<4.o.Z){4.o.Z=4.1g;4.o.28=1O.2f(4.o.28)}5(4.1h<4.o.ty){4.o.ty=4.1h;4.o.29=1O.2f(4.o.29)}4.o.4B();7.d.23.1v(4.o.4C());4.3o();4.r.1W();4.1g=-1;4.1h=-1;4.o.Z=0;4.o.ty=0;4.o.28=0;4.o.29=0;4.o.T=4.1N();4.o=9;4.48(9);a}5(4.1L&&4.1g!=-1&&4.1h!=-1){6 E=e;e.1l();4.z.28=32;4.z.29=32;4.z.4B();6 4Z=4.z.4C();7.d.22.1v(4Z);4.3n();4.r.1W();4.1g=-1;4.1h=-1;4.z.Z=0;4.z.ty=0;4.z.28=0;4.z.29=0;4.z.T=4.1N();4.47(9);7.z=4Z;7.z.3c();a}4.6s+=4.totalLast;5(4.49)4.2V();5(4.1R){4.1y+=4.3a;4.1z+=4.3b;4.3a=0;4.3b=0}5(4.6s<=0){}e.1Q();4.2a=v;4.49=v;4.5u=0;4.1R=v;a},getFullUrl:8(){a 7.urlIndex+"?19="+2C.2X(4.H)+"&bbv="+4.5M()+"&6t="+7.6t},resizeContainer:8(w,h,l,t){},getDistance:8(51,3L){6 x1=51.2h;6 x2=3L.2h;6 y1=51.2i;6 y2=3L.2i;a 1O.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1))},6u:8(19,3S,3T){4.1q=u.1r.1H;5(19==9)a;5(!19.3U)4.1w.1n=19.getBigPageUrl();q{}4.1w.b.G="2U"},6v:8(){4.1q=u.1r.6w},26:8(3S,3T){6 1m=0;5(4.H!=9)1m=4.H;6 19=7.2j(1m);5(3S==9||3T==9)4.6v();q 4.6u(19,3S,3T)},fillImg:8(6x){4.1w.1n=6x},3V:8(e){6 E=e;5(E.1V==9){4.6y(e);a}6 k=E.1V[0];5(4.56(k.18,k.Y))a;5(4.57(k.18,k.Y))a;5(4.1K){4.o=S u.6z();4.o.Z=k.18;4.o.ty=k.Y;5(7.1P)4.o.T=4.1N();q 5(7.d.1k){5(4.o.Z>7.R/2)4.o.T=4.1c-1;q 4.o.T=4.1d-1}q 5(4.o.Z>7.R/2)4.o.T=4.1d-1;q 4.o.T=4.1c-1;a}5(4.1L){4.z=S u.6A();4.z.Z=k.18;4.z.ty=k.Y;4.1g=k.18;4.1h=k.Y;5(7.1P)4.z.T=4.1N();q 5(7.d.1k){5(4.z.Z>7.R/2)4.z.T=4.1c-1;q 4.z.T=4.1d-1}q 5(4.z.Z>7.R/2)4.z.T=4.1d-1;q 4.z.T=4.1c-1;a}6 2g=S 3M();5(4.2k!=9){6 3W=4.2k.3X();6 3Y=2g.3X();5(3Y-3W<7.6B){4.26(0,0);4.2k=9;5(4.1q==u.1r.1H){}q{}a}}4.2k=2g;4.13();4.2a=N;5(4.1q==u.1r.1H)4.2a=v;4.58(k.18,k.Y);4.2G=k.2h;4.2H=k.2i;4.3Q=4.2G;4.3R=4.2H;4.1R=N},6y:8(e){6 E=e;6 k=E;5(4.56(k.18,k.Y))a;5(4.57(k.18,k.Y))a;5(4.1K){4.o=S u.6z();4.o.Z=k.18;4.o.ty=k.Y;5(7.1P)4.o.T=4.1N();q 5(7.d.1k){5(4.o.Z>7.R/2)4.o.T=4.1c-1;q 4.o.T=4.1d-1}q 5(4.o.Z>7.R/2)4.o.T=4.1d-1;q 4.o.T=4.1c-1;a}5(4.1L){4.z=S u.6A();4.z.Z=k.18;4.z.ty=k.Y;4.1g=k.18;4.1h=k.Y;5(7.1P)4.z.T=4.1N();q 5(7.d.1k){5(4.z.Z>7.R/2)4.z.T=4.1c-1;q 4.z.T=4.1d-1}q 5(4.z.Z>7.R/2)4.z.T=4.1d-1;q 4.z.T=4.1c-1;a}6 2g=S 3M();5(4.2k!=9){6 3W=4.2k.3X();6 3Y=2g.3X();5(3Y-3W<7.6B){4.26(0,0);4.2k=9;5(4.1q==u.1r.1H){}q{}a}}4.2k=2g;4.13();4.2a=N;5(4.1q==u.1r.1H)4.2a=v;6 6C=C.D.I.P.R/2|0;6 6D=C.D.I.P.1p/2|0;6 59=0;6 5a=0;6 5b=k.18;6 5c=k.Y;5(4.1i>1){59=-(k.18-6C+4.1y/(4.1i-1)|0);5a=-(k.Y-6D+4.1z/(4.1i-1)|0);5b=k.18+59*(4.1i-1)/4.1i;5c=k.Y+5a*(4.1i-1)/4.1i}5(4.58(5b,5c))4.1R=v;q 4.1R=N;4.2G=k.2h;4.2H=k.2i;4.3Q=4.2G;4.3R=4.2H},onMouseMove:8(e){e.1Q();5(4.1q==u.1r.1H){}},6E:8(e){e.1Q();4.6F()},6F:8(){4.1i+=1;4.1q=u.1r.1H;5(4.1i>3){4.1i=1;4.1q=u.1r.6w;4.26(9,9);4.3N.b.1T=4.6G();4.5d();4.4q(9);a}4.5d();4.26(0,0);4.3N.b.1T=4.6H();4.2V(9)},5e:8(2e){6 t=4.3w;t.34=2C.2X(2e)},setPageCount:8(2e){4.tbPageCount.Q="/&nbsp;"+2C.2X(2e)},5f:8(){4.5S();4.5D();4.26(0,0)},TansRightToLeft:8(){4.2J(7.d.17.O-1)},6I:8(e){5(4.X.b.J==0)a;4.2K();4.13();5(7.d.1k)4.2J(0);q 4.2J(7.d.17.O-1)},6J:8(e){5(4.X.b.J==0)a;4.2K();4.13();5(7.d.1k)4.2J(7.d.17.O-1);q 4.2J(0)},3O:8(e){5(4.X.b.J==0)a;4.2K();4.13();4.31(-1)},2K:8(){5(4.1w.1n!=""){4.1w.1n="";4.1w.b.G="1o"}5(4.1U.1n!=""){4.1U.1n="";4.1U.b.G="1o"}7.6K();4.3k();4.3i()},3P:8(e){5(4.X.b.J==0)a;4.2K();4.13();4.31(1)},2J:8(B){4.2K();4.3A(B);6 19=7.2j(B);5(19==9)a;4.5e(B+1);4.H=B;4.1I();7.2l.5g.b.G="1o";7.2l.3d.b.G="1o";5(19!=9&&19.3U&&7.5h)7.2l.3d.b.G="1t";4.4p();4.3G();4.3H();4.4k();4.3o();4.3n();4.3C();4.4n();4.r.6L();4.r.6M();4.r.3e(19);4.r.1A=0;4.r.1W();4.4m();7.5i(B+1)},31:8(1A){5(1A==0)a;5(7.d.1k)1A=0-1A;5(7.d==9||7.d.17==9)a;6 3f=4.H+1A;6 3Z=7.2j(3f);5(3Z==9)a;4.5t();4.5e(3f+1);6 F=4;4.r.6L();4.r.6M();4.r.3e(7.2j(4.H,0));4.r.3e(7.2j(4.H,1));4.r.3e(7.2j(4.H,-1));4.r.1A=0;5(4.40!=9)4.40.5Z();6 3g=15;4.40.3z=8(2b){6 5j=2b/3g;5(7.d.1k)F.r.1A=1A*5j;q F.r.1A=-1A*5j;5(2b==3g)F.r.1A=-1A;5(2b==3g){F.H=3f;F.3G();F.3H();F.4k();F.3o();F.3n();F.4m();F.3C();7.2l.5g.b.G="1o";7.2l.3d.b.G="1o";5(3Z!=9&&3Z.3U&&7.5h)7.2l.3d.b.G="1t";7.5i(3f+1);7.6K();F.5f()}F.r.1W()};4.6l();4.6k();4.4n();4.4p();4.40.4y(3g|0)},5k:8(e){e.1Q();5(4.1K||4.1L||4.4W)a;5(4.1q==u.1r.1H)a;5(4.X.b.J!=7.4r)4.4q(e);q 4.2V(e)},onMouseUp:8(e){},57:8(x,y){6 41=4.r.getNoteAt(x,y);5(41!=9&&4.1L){7.z=41;41.3c();a N}q 7.z=9;a v},56:8(x,y){6 42=4.r.getHighLightAt(x,y);5(42!=9){7.o=42;42.3c();a N}q 7.o=9;a v},58:8(x,y){6 5l=4.r.getHotLinkAt(x,y);5(5l!=9){5l.3c();a N}6 5m=4.r.getButtonAt(x,y);5(5m!=9){5m.3c();a N}a v},loadPage:8(5n){7.2l.5g.b.G="1o";4.3A(5n);4.H=5n;4.3G();4.3H();4.3C();6 19=7.2j(4.H);4.r.3e(19);5(19!=9&&19.3U&&7.5h)7.2l.3d.b.G="1t";4.r.1W();6 p=4.H;5(p==9)p=0;7.5i(p+1);4.5f()},afterInit:8(){},1e:8(e){e.1l();e.1Q()},attachActions:8(){5(4.root==9)a;4.1s.5x=$g(4,4.6E);4.1s.12=$g(4,4.5k);4.1s.onmousedown=$g(4,4.3V);4.1s.onmousemove=$g(4,4.3I);4.1s.onmouseup=$g(4,4.2I);4.1s.2A=$g(4,4.3V);4.1s.2O=$g(4,4.3I);4.1s.2P=$g(4,4.2I);4.1s.2Q=$g(4,4.2I);4.1s.4e=$g(4,4.4T);4.1s.4f=$g(4,4.4V);4.1s.4g=$g(4,4.4U);4.1s.4h=$g(4,4.1e);4.1s.4i=$g(4,4.1e);4.1B.12=$g(4,4.5k);4.1B.2A=$g(4,4.3V);4.1B.2O=$g(4,4.3I);4.1B.2P=$g(4,4.2I);4.1B.2Q=$g(4,4.2I);4.1B.4e=$g(4,4.4T);4.1B.4f=$g(4,4.4V);4.1B.4g=$g(4,4.4U);4.6N.4h=$g(4,4.1e);4.6N.4i=$g(4,4.1e);5(C.D.1F.6d.6e.6f("iPad")!=-1){4.M.2A=$g(4,4.4S);4.M.2O=$g(4,4.4Q);4.M.2P=$g(4,4.37);4.M.2Q=$g(4,4.37);4.1E.2A=$g(4,4.4S);4.1E.2O=$g(4,4.4Q);4.1E.2P=$g(4,4.37);4.1E.2Q=$g(4,4.37)}4.5P.12=$g(4,4.3P);4.5Q.12=$g(4,4.3O);4.5N.12=$g(4,4.6J);4.5O.12=$g(4,4.6I);4.3t.12=$g(4,4.6g);4.4K.12=$g(4,4.6i);4.4J.12=$g(4,4.6h);4.3v.12=$g(4,4.6c);4.3u.12=$g(4,4.6b);4.2B.12=$g(4,4.4w);4.4v.12=$g(4,4.5V);4.3w.onfocus=$g(4,4.6a);4.btnZoom.2A=$g(4,4.5W);4.3j.12=$g(4,4.48);4.44.12=$g(4,4.5q);4.3l.12=$g(4,4.47);4.46.12=$g(4,4.5r);4.2B.12=$g(4,4.4w)},getBookmarkContext:8(){a 4.cvsBookmark.2L("2d")},39:8(){a 4.cvsNote.2L("2d")},38:8(){a 4.cvsHighLight.2L("2d")},getButtonContext:8(){a 4.cvsButton.2L("2d")},2L:8(){a 4.canvas.2L("2d")},6G:8(){a 4.43+"-1C-2m:2n("+1+" );-1C-1D: 2o 2M ;-2p-2m:2n("+1+");-2p-1D: 2o 2M ;5o:"+0+"px;2r:"+0+"px;"},4Y:8(x,y,6O){5(6O)a 4.43+"-1C-2m:2n("+4.1i+" );-1C-1D: 2o 6P ;-2p-2m:2n("+4.1i+" ) ; -2p-1D: 2o 6P ;5o:"+(4.1z+y|0)+"px;2r:"+(4.1y+x|0)+"px;";q a 4.43+"-1C-2m:2n("+4.1i+" );-1C-1D: 2o 2M ;-2p-2m:2n("+4.1i+" ) ; -2p-1D: 2o 2M ;5o:"+(4.1z+y|0)+"px;2r:"+(4.1y+x|0)+"px;"},6H:8(){a 4.43+"-1C-2m:2n("+4.1i+" );-1C-1D: 2o 2M ;-2p-2m:2n("+4.1i+");-2p-1D: 2o 2M ;"},requestMainAd:8(){},5d:8(){4.3a=0;4.3b=0;4.1y=0;4.1z=0},__class__:3h}',
    [],
    424,
    "||||this|if|var|RunTime|function|null|return|style||book||item|bind||||touch||_g1||currentHighLight||else|bookContext|||core|false||||currentNote|_g|pageNum|js|Lib|obj|self|display|currentPageNum|document|opacity|bookmarks||topBarContent|true|length|body|innerHTML|clientWidth|new|tpageNum|html|dom|offsetX|topMenuBarBg|pageY|tx||while|onclick|stopFlip|HtmlHelper||current|pages|pageX|page|currentTopBarButton|offsetY|leftPageNum|rightPageNum|forbidden|result|gestureLastX|gestureLastY|zoomLevel|videos|rightToLeft|preventDefault|num|src|none|clientHeight|zoomStatus|ZoomStatus|mask|block|list|push|zoomLeftPage|word|currentOrgX|currentOrgY|pageOffset|cvsVideo|webkit|transition|topFullTextContent|window||zoomed|hideTopBar|HideBarOnPhone|bStartHighLight|bStartNote|slides|getCurrentPageNum|Math|singlePage|stopPropagation|startMoveGesture|Array|cssText|zoomRightPage|touches|render|resetAndShowTopBar|setTopTitle||||notes|highlights|buttons|audios|zoomAt|bookmark|twidth|theight|touchActive|count|setVisible||val|abs|date|clientX|clientY|getPage|lastTouchTime|flipBook|transform|scale|all|moz|checkIfExistBookmark|left||flipTweener||input|type||toBookmarksHtml|backgroundColor|ontouchstart|btnAutoFlip|Std|text|layout|inputDom|touchStartX|touchStartY|onTouchEnd|turnToPage|clearZoom|getContext|500ms|contentInfo|ontouchmove|ontouchend|ontouchcancel|audio|getElementsByTagName|bottomBar|inline|hideBottomBar||string|content|isAutoFliping||turnPage||searchWord|value|height|hotlinks|onTopBarTouchEnd|getHighLightContext|getNoteContext|moveDX|moveDY|click|leftPageLock|addPage|dstPageNum|maxCount|FlipBook|resetHighlightButton|btnMask|resetNoteButton|btnNote|cvsLeftPageBgAudio|loadCtxNotes|loadCtxHighLights|ease|out|atOnce||btnContents|btnSearch|btnThumbs|tbPage|StringTools|scrollTop|onChange|preloadPages|resetFlipFlag|loadCurrentBookmark|currentBookmark|results|hide|loadCtxHotlinks|loadCtxSlideshow|onTouchMove|clearRect|draw|touch2|Date|zoom|turnToPrevPage|turnToNextPage|lastTouchX|lastTouchY|point0|point1|locked|onTouchStart|lastTime|getTime|newTime|dstPage|tweener|note|highlight|zoomCSS|btnBookMark||btnAboutUs|onButtonNoteClick|onButtonMaskClick|startZoomGesture|findVideoHtmlDoms|_g3|video||gestureend|gesturestart|gesturechange|onscroll|onmousewheel|toPopupPageAudiosHtml|loadCtxButtons|right|updateVideos|clearVideos|slideshow|clearSlideshow|showBottomBar|bottomBarAlpha|animate|match|getFullText|btnShowTxt|onAutoFlipClick|Tweener|start|bms||save|clone|tmp|contentLowerCase|resultsDom|getSearchInputDom|trim|search|btnSns|btnEmail|topBar|step|HtmlDomHelper|links|slideshows|onTopBarTouchMove|offset|onTopBarTouchStart|onGestureEnd|onGestureChange|onGestureStart|bAbortMouseDown|checkCanZoom|getZoomInMoveCSS|saveObj||touch1|||||onHighLightClick|onNoteClick|onButtonLinkClick|_dx|_dy|xInBook|yInBook|resetCSS|setCurrentPage|onEnterPage|rightPageLock|bLocked|logPageView|ratio|onMouseDown|hotlink|button|index|top|f_sort|onButtonBookmark|onAboutUsClick|ff00ff|resetZoom|startFingerDistance|updateVideoLayout|_g2|ondblclick|attachVideoTouchEvents|url|destination|item1|getElementById|updateAudios|getCurrentPageAudios|renderVideo|loadCtxVideos|renderSlideshow|cvsSlideshow|updateSlideshow|bCanGestureZoom|saveBottomBarVisible|getCurrentBBV|btnFirstPage|btnLastPage|btnNextPage|btnPrevPage|updateFullTextCore|updateFullText|invokePageContentsAction|showTxtCore|onShowTxtClick|onZoomClick|countOfClip|canTurnRight|stop|removeBookmark|searchInPages|toLowerCase|posList|orc|utils|Util|searchCore|Search|cvsOthers|onTbPageFocus|onSearchClick|onThumbsClick|navigator|userAgent|indexOf|onContentsClick|onSnsClick|onEmailClick|focusSearchInput|clearCtxButtons|clearCtxHotlinks|touchTopBarY|round|touchTopBarActive|onMouseTouchMove|isPopupModal|innerWidth|totalDistance|pcode|zoomIn|zoomOut|normal|urlPage|onMouseTouchStart|HighLight|NoteIcon|doubleClickIntervalMs|centerX|centerY|onDblClick|ZoomWithCSS|getZoomOutCSS|getZoomInCSS|turnToLastPage|turnToFirstPage|clearPopupContents|removeAllPages|resetLayoutParams|maskPopup|atonce|0ms".split(
      "|"
    ),
    0,
    {}
  )
);
var DoubleFlipBook = function () {
  this.mainAdLayout = "center";
  this.mainAdDockPos = "halfpage";
  FlipBook.call(this);
};
DoubleFlipBook.__name__ = true;
DoubleFlipBook.__super__ = FlipBook;
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < 62 ? "" : e(parseInt(c / 62))) +
        ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "([3679a-df-hj-moq-su-zA-Z]|[1-3]\\w)";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    '2m.2n=$extend(FlipBook.2n,{1Q:j(){7 w=3.G();7 16=I 1e();6(a.f!=9&&a.f.16!=9){7 k=0,u=a.f.16.B;Y(k<u){7 i=k++;7 b=a.f.16[i];7 g=w.g(b.o);6(g!=0){b.M=g;16.S(b)}}}3.v.16=16},1R:j(){7 w=3.G();7 17=I 1e();6(a.f!=9&&a.f.17!=9){7 k=0,u=a.f.17.B;Y(k<u){7 i=k++;7 b=a.f.17[i];7 g=w.g(b.o);6(g!=0){b.M=g;17.S(b)}}}3.v.17=17},1S:j(){7 N=I 1e();6(a.f!=9&&a.f.N!=9){7 w=3.G();7 k=0,u=a.f.N.B;Y(k<u){7 i=k++;7 b=a.f.N[i];7 g=w.g(b.o);6(g!=0&&b.1T=="onpage"){b.M=g;N.S(b)}h 6(b.1T=="foreground"){6((b.o+1)%2!=0)b.M=1;h b.M=-1;N.S(b)}h 6(b.1T=="background"){6(w.l==9&&(b.o+1)%2==0){b.M=-1;N.S(b)}6(w.m==9&&(b.o+1)%2!=0){b.M=1;N.S(b)}}}}3.v.N=N},canTurnRight:j(){7 x=3.2o();7 18=a.f.T.B;6(x%2==1)x++;C x<18-1},showPopupAudio:j(b){b.1t=b.2p;7 o=b.o;7 19=I 1f.AudioInfo();19.o=o;19.1t=b.2p;6(o%2==1){3.1U.1n="";3.1U.1n=1f.2q.2r(19,1u);7 1v=js.1h.1o.1p("1U").2s("19")[0];1v.2t()}h{3.1V.1n="";3.1V.1n=1f.2q.2r(19,1w);7 1v=js.1h.1o.1p("1V").2s("19")[0];1v.2t()}},turnPage:j(1i){7 y=0;6(3.U!=9)y=3.U;6(a.f.1W)1i=0-1i;y=y+1i*2;6(y<0)y=0;6(y>=a.f.T.B)y=a.f.T.B-1;3.2u(y)},2v:j(d){7 18=a.f.T.B;7 t=3.2w;6(d==1){t.Z=1a.1j(d);3.1X=-1;3.1Y=d}h 6(d%2==0&&d==18){t.Z=1a.1j(d);3.1X=d;3.1Y=-1}h{7 v0=d-d%2;7 v1=v0+1;3.1X=v0;3.1Y=v1;t.Z=1a.1j(v0)+"-"+1a.1j(v1)}},loadCtxVideos:j(){7 1b=I 1e();6(a.f!=9&&a.f.1b!=9){7 w=3.G();7 k=0,u=a.f.1b.B;Y(k<u){7 i=k++;7 b=a.f.1b[i];7 g=w.g(b.o);6(g!=0){b.M=g;1b.S(b)}}}3.v.1b=1b},20:j(){7 21=I 1e();6(a.f!=9&&a.f.1y!=9){7 w=3.G();7 k=0,u=a.f.1y.B;Y(k<u){7 i=k++;7 b=a.f.1y[i];7 g=w.g(b.o);6(g!=0){b.M=g;21.S(b)}}}3.v.1y=21},22:j(){7 23=I 1e();6(a.f!=9&&a.f.24!=9){7 w=3.G();7 k=0,u=a.f.24.B;Y(k<u){7 i=k++;7 b=a.f.24[i];7 g=w.g(b.o);6(g!=0){b.M=g;23.S(b)}}}3.v.slideshow=23;3.updateSlideshow()},zoomAt:j(1z,1A){7 x=0;6(3.U!=9)x=3.U;7 w=3.G();6(1z==9||1A==9)3.2x();h 3.2y(w,1z,1A)},2y:j(10,1z,1A){6(10==9)C;6(10.l!=9){6(!10.l.1k)3.2z.25=10.l.2A();h{}3.2z.c.J="11"}6(10.m!=9){6(!10.m.1k)3.2B.25=10.m.2A();h{}3.2B.c.J="11"}},2x:j(){3.page_offsetX=0;3.page_offsetY=0},G:j(){7 y=0;6(3.U!=9)y=3.U;C I 1f.26(y)},27:j(Z){6(Z==9||Z=="")C 0;C 1a.parseInt(Z.substring(0,Z.lastIndexOf("px")))},1B:j(){1C{6(3.U==0)3.s.c.J="11";h 3.s.c.J="28"}1D(ex){}},requestMainAd:j(){3.s=js.1h.1o.1p("mainAdhtml");7 an=js.1h.1o.1p("O");3.O=an;7 2D=js.1h.1o.1p("mainAdimg");3.H=2D;1C{7 z=9;1C{z=I haxe.xml.Fast(a.bookInfo.firstElement().elementsNamed("mainAd").next())}1D(e){}6(z!=9){6(z.1q.P("2E"))3.29=z.1r.P("2E");3.s.c.J="11";3.s.c.marginRight=0;3.s.c.13=a.2a+"px";6(3.29=="halfpage"){3.s.c.14=a.2F+"px";3.s.c.1E=a.2b/2-a.2F+"px";3.s.c.1s=a.2b/2+"px"}h 6(3.29=="halfscreen"){3.s.c.1E="0px";3.s.c.14=a.2b/2+"px"}7 2c=1w;1C{6(z.2d()!=9&&2G.trim(z.2d())!="")2c=1u}1D(err){}6(2c){3.s.c.overflow="hide";3.s.1n=z.2d()}h 6(z.1q.P("1t")){3.H.25=z.1r.P("1t");6(z.1q.P("2H"))3.1F=z.1r.P("2H");6(z.1q.P("2e")){3.2I=z.1r.P("2e");3.O.2e=3.2I;3.O.2f=z.1q.P("2f")?z.1r.P("2f"):"_blank"}6(3.1F=="center"){3.O.c.2J=(a.2a-3.27(3.H.c.13))/4+"px";3.O.c.2K="2L";3.O.c.2M="1s";3.H.c.2N=3.s.c.13;3.H.c.2O=3.s.c.14}h 6(3.1F=="stretch"){3.H.c.13=3.s.c.13;3.H.c.14=3.s.c.14}h 6(3.1F=="kk"){3.H.c.13="2P";3.H.c.14="2P"}h{3.O.c.2J=(a.2a-3.27(3.H.c.13))/4+"px";3.O.c.2K="2L";3.O.c.2M="1s";3.H.c.2N=3.s.c.13;3.H.c.2O=3.s.c.14}}}3.1B()}1D(e){js.1h.alert(e)}},2u:j(o){7 u=3;3.2Q(o);7 y=3.2o();6(y<0||y>=a.f.T.B)C;6(o<0||o>=a.f.T.B)C;7 1l=I 1f.26(y);7 A=I 1f.26(o);7 2g=1l.2R();7 1G=A.2R();6(1G<0||2g==1G)C;3.v.removeAllPages();3.v.resetLayoutParams();3.2v(o+1);3.v.15(1l.l);3.v.15(1l.m);3.v.15(A.l);3.v.15(A.m);6(A.l!=9)a.1H(A.l.x+1);6(A.m!=9)a.1H(A.m.x+1);3.v.1i=0;7 1i=0;7 2h=0;7 2i=1G>2g?1:-1;7 D=a.2S(-1);7 K=a.2S(1);7 2j=j(d){7 E=1l.l;7 V=1l.m;7 W=A.l;7 X=A.m;6(2i>0){6(a.f.1W){6(E!=9){6(d<=0.5)E.q=D;h E.q=D.1c(2-d*2)}6(V!=9){}6(W!=9)W.q=D.1c(d,-D.dw*2*(1-d));6(X!=9)X.q=K.1d(d)}h{6(E!=9){6(d<=0.5)E.q=D;h E.q=D.1d(2-d*2)}6(V!=9){}6(W!=9)W.q=D.1d(d,D.dw*2*(1-d));6(X!=9)X.q=K.1c(d)}}h{d=-d;6(a.f.1W){6(E!=9){6(d<=0.5)E.q=D.1d(1-2*d);h E.q=9}6(V!=9){6(d<=0.5)V.q=K;h V.q=K.1d(2-d*2)}6(W!=9)W.q=D.1c(d);6(X!=9)X.q=K.1d(d,K.dw*2*(1-d))}h{6(E!=9){6(d<=0.5)E.q=D.1c(1-2*d);h E.q=9}6(V!=9){6(d<=0.5)V.q=K;h V.q=K.1c(2-d*2)}6(W!=9)W.q=D.1d(d);6(X!=9)X.q=K.1c(d,-K.dw*2*(1-d))}}};2j(0);6(3.1J!=9)3.1J.stop();7 L=3;7 1K=3.v;7 1L=8;3.1J.onChange=j(18){7 1M=18/1L;2h=2i*1M*1M*1M;2j(2h);6(18==1L){1K.clear(1u);1K.15(A.l);1K.15(A.m);L.U=o;L.20();L.22();L.1S();L.1R();L.1Q();L.2T();L.2U();L.2V();a.1m.2k.c.J="28";a.1m.2l.c.J="28";6(A.m!=9&&A.m.1k&&a.1N)a.1m.2k.c.J="11";6(A.l!=9&&A.l.1k&&a.1N)a.1m.2l.c.J="11"}L.v.2W();u.1B()};3.clearCtxHotlinks();3.clearCtxButtons();3.clearCtxNote();3.clearCtxHighLight();3.clearVideos();3.clearSlideshow();3.1J.start(1L|0);3.hideTopBar()},getCurrentPageAudios:j(){7 1O=a.f.1O;7 g={1E:9,1s:9};7 Q=-1;7 R=-1;7 p=3.G();6(p.l!=9)Q=p.l.x;6(p.m!=9)R=p.m.x;7 k=0,u=1O.B;Y(k<u){7 i=k++;7 b=1O[i];6(b.o==Q)g.1E=b;h 6(b.o==R)g.1s=b}C g},getFullText:j(T){7 Q=-1;7 R=-1;7 p=3.G();6(p.l!=9)Q=p.l.x;6(p.m!=9)R=p.m.x;6(Q>R){7 2X=R;R=Q;Q=2X}7 r="";7 k=0,u=T.B;Y(k<u){7 i=k++;7 b=T[i];6(b.x==Q){r+="<F />";r+="<F />";r+="==== 2Y "+1a.1j(Q+1)+" ====";r+="<F />";r+="<F />";r+=b.2Z;r+="<F />";r+="<F />"}h 6(b.x==R){r+="<F />";r+="<F />";r+="==== 2Y "+1a.1j(R+1)+" ====";r+="<F />";r+="<F />";r+=b.2Z;r+="<F />";r+="<F />"}}r=2G.replace(r,"\\n","<F />");C r},loadPage:j(1P){3.2Q(1P);3.U=1P;3.20();3.22();3.1S();3.1R();3.1Q();3.2T();3.2U();7 p=3.G();3.v.15(p.l);3.v.15(p.m);6(p.m!=9&&p.m.1k&&a.1N)a.1m.2k.c.J="11";6(p.l!=9&&p.l.1k&&a.1N)a.1m.2l.c.J="11";3.v.2W();6(p.l!=9)a.1H(p.l.x+1);6(p.m!=9)a.1H(p.m.x+1);3.2V();6(1P!=9)3.1B()},checkCanZoom:j(){7 p=3.G();6(p.l!=9){6(!p.l.30)C 1w}6(p.m!=9){6(!p.m.30)C 1w}C 1u},afterInit:j(){3.2w.c.14="60px"},__class__:2m});',
    [],
    187,
    "|||this|||if|var||null|RunTime|item|style|val||book|match|else||function|_g1|leftPage|rightPage||pageNum||drawParams|result|mainAdHtml||_g|bookContext|pair|num|current|ad|newPair|length|return|ldp|downLeft|br|getCurrentPair|mainAdImg|new|display|rdp|self|pageLayoutType|buttons|mainAdInner|resolve|lftPg|rtPg|push|pages|currentPageNum|downRight|upLeft|upRight|while|value|page|block||height|width|addPage|notes|highlights|count|audio|Std|videos|sliceRight|sliceLeft|Array|core||Lib|pageOffset|string|locked|oldPair|flipBook|innerHTML|document|getElementById|has|att|right|url|true|item1|false||hotlinks|point0|point1|updateAds|try|catch|left|mainAdLayout|newNum|logPageView||tweener|ctx|maxCount|ratio|bLocked|audios|index|loadCtxNotes|loadCtxHighLights|loadCtxButtons|layer|cvsLeftPageBgAudio|cvsRightPageBgAudio|rightToLeft|leftPageNum|rightPageNum||loadCtxHotlinks|links|loadCtxSlideshow|slides|slideshows|src|PagePair|getRealValue|none|mainAdDockPos|clientHeight|clientWidth|isHtmlAD|getInnerData|href|target|oldNum|offset|dstPageOffset|update|rightPageLock|leftPageLock|DoubleFlipBook|prototype|getCurrentPageNum|destination|HtmlHelper|toPopupPageAudiosHtml|getElementsByTagName|play|turnToPage|setCurrentPage|tbPage|pageZoomOut|pageZoomIn|zoomLeftPage|getBigPageUrl|zoomRightPage||img|dockPos|imagePageWidth|StringTools|layout|mainAdHref|top|verticalAlign|middle|textAlign|maxHeight|maxWidth|300px|preloadPages|getNumInDoubleMode|getDrawParams|loadCurrentBookmark|updateVideos|onEnterPage|render|tmp|Page|content|canZoom".split(
      "|"
    ),
    0,
    {}
  )
);
var EReg = function (r, opt) {
  opt = opt.split("u").join("");
  this.r = new RegExp(r, opt);
};
EReg.__name__ = true;
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return c.toString(36);
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "[1-9aceg-lo-qtu]";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    'e.prototype={customReplace:2(s,f){9 5=new StringBuf();while(true){6(!1.l(s))break;5.b+=g.4(1.o());5.b+=g.4(f(1));s=1.p()}5.b+=g.4(s);3 5.b},h:2(s,q){3 s.h(1.r,q)},t:2(s){9 d="#__delim__#";3 s.h(1.r,d).t(d)},matchedPos:2(){6(1.r.m==7)a"i 4 8";3{pos:1.r.m.j,len:1.r.m[0].c}},p:2(){6(1.r.m==7)a"i 4 8";9 k=1.r.m.j+1.r.m[0].c;3 1.r.s.u(k,1.r.s.c-k)},o:2(){6(1.r.m==7)a"i 4 8";3 1.r.s.u(0,1.r.m.j)},8:2(n){3 1.r.m!=7&&n>=0&&n<1.r.m.c?1.r.m[n]:(2($1){9 $r;a"e::8";3 $r}(1))},l:2(s){6(1.r.global)1.r.lastIndex=0;1.r.m=1.r.exec(s);1.r.s=s;3 1.r.m!=7},__class__:e}',
    [],
    31,
    "|this|function|return|string|buf|if|null|matched|var|throw||length||EReg||Std|replace|No|index|sz|match|||matchedLeft|matchedRight|by|||split|substr".split(
      "|"
    ),
    0,
    {}
  )
);
var Hash = function () {
  this.h = {};
};
Hash.__name__ = true;
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return c.toString(36);
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "[02-9c-gj-l]";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    'g.prototype={toString:3(){8 s=new StringBuf();s.b+=5.6("{");8 7=0.c();while(7.9()){8 i=7.d();s.b+=5.6(i);s.b+=5.6(" => ");s.b+=5.6(5.6(0.j(i)));e(7.9())s.b+=5.6(", ")}s.b+=5.6("}");4 s.b},iterator:3(){4{k:0.h,7:0.c(),9:3(){4 0.7.9()},d:3(){8 i=0.7.d();4 0.k["$"+i]}}},c:3(){8 a=[];for(8 2 in 0.h){e(0.h.f(2))a.push(2.substr(1))}4 HxOverrides.iter(a)},remove:3(2){2="$"+2;e(!0.h.f(2))4 false;delete(0.h[2]);4 true},exists:3(2){4 0.h.f("$"+2)},j:3(2){4 0.h["$"+2]},set:3(2,l){0.h["$"+2]=l},__class__:g}',
    [],
    22,
    "this||key|function|return|Std|string|it|var|hasNext|||keys|next|if|hasOwnProperty|Hash|||get|ref|value".split(
      "|"
    ),
    0,
    {}
  )
);
var HtmlDomHelper = function () {};
HtmlDomHelper.__name__ = true;
HtmlDomHelper.setTopBarDefaultSize = function (dom) {
  dom.style.width = "500px";
  dom.style.left = Std.string(((RunTime.clientWidth - 500) / 2) | 0) + "px";
};
HtmlDomHelper.setTopBarMaxSize = function (dom) {
  dom.style.width = Std.string(RunTime.clientWidth | 0) + "px";
  dom.style.left = "0px";
};
HtmlDomHelper.setTopFullTextContentMaxSize = function (dom) {
  dom.style.width = Std.string((RunTime.clientWidth | 0) - 20) + "px";
  dom.style.top = "35px";
  dom.style.height = Std.string((RunTime.clientHeight | 0) - 80) + "px";
  dom.style.left = "0px";
};
var HxOverrides = function () {};
HxOverrides.__name__ = true;
HxOverrides.dateStr = function (date) {
  var m = date.getMonth() + 1;
  var d = date.getDate();
  var h = date.getHours();
  var mi = date.getMinutes();
  var s = date.getSeconds();
  return (
    date.getFullYear() +
    "-" +
    (m < 10 ? "0" + m : "" + m) +
    "-" +
    (d < 10 ? "0" + d : "" + d) +
    " " +
    (h < 10 ? "0" + h : "" + h) +
    ":" +
    (mi < 10 ? "0" + mi : "" + mi) +
    ":" +
    (s < 10 ? "0" + s : "" + s)
  );
};
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return c.toString(36);
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "[34679a]";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    'HxOverrides.strDate=function(s){switch(s.length){6 8:3 k=s.4(":");3 d=7 9();d.setTime(0);d.setUTCHours(k[0]);d.setUTCMinutes(k[1]);d.setUTCSeconds(k[2]);a d;6 10:3 k=s.4("-");a 7 9(k[0],k[1]-1,k[2],0,0,0);6 19:3 k=s.4(" ");3 y=k[0].4("-");3 t=k[1].4(":");a 7 9(y[0],y[1]-1,y[2],t[0],t[1],t[2]);default:throw"Invalid date format : "+s;}}',
    [],
    11,
    "|||var|split||case|new||Date|return".split("|"),
    0,
    {}
  )
);
HxOverrides.cca = function (s, index) {
  var x = s.charCodeAt(index);
  if (x != x) return undefined;
  return x;
};
HxOverrides.substr = function (s, pos, len) {
  if (pos != null && pos != 0 && len != null && len < 0) return "";
  if (len == null) len = s.length;
  if (pos < 0) {
    pos = s.length + pos;
    if (pos < 0) pos = 0;
  } else if (len < 0) len = s.length + len - pos;
  return s.substr(pos, len);
};
HxOverrides.remove = function (a, obj) {
  var i = 0;
  var l = a.length;
  while (i < l) {
    if (a[i] == obj) {
      a.splice(i, 1);
      return true;
    }
    i++;
  }
  return false;
};
HxOverrides.iter = function (a) {
  return {
    cur: 0,
    arr: a,
    hasNext: function () {
      return this.cur < this.arr.length;
    },
    next: function () {
      return this.arr[this.cur++];
    },
  };
};
var IntIter = function (min, max) {
  this.min = min;
  this.max = max;
};
IntIter.__name__ = true;
IntIter.prototype = {
  next: function () {
    return this.min++;
  },
  hasNext: function () {
    return this.min < this.max;
  },
  __class__: IntIter,
};
var L = function () {};
L.__name__ = true;
L.s = function (key, dftVal) {
  if (L.instance.exists(key) == false) return dftVal != null ? dftVal : key;
  else return L.instance.get(key);
};
L.loadRemote = function (url, onSuccess, onError) {
  orc.utils.Util.request(
    url,
    function (data) {
      var xml = Xml.parse(data);
      L.loadXml(xml);
      if (onSuccess != null) onSuccess();
    },
    onError
  );
};
L.loadXml = function (xml) {
  if (xml == null) return;
  var i = xml.elementsNamed("lang");
  if (i.hasNext() == false) return;
  xml = i.next();
  i = xml.elementsNamed("item");
  while (i.hasNext() == true) {
    var node = i.next();
    var key = node.get("key");
    var val = node.get("value");
    L.instance.set(key, val);
  }
};
var List = function () {
  this.length = 0;
};
List.__name__ = true;
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return c.toString(36);
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "[2-9ac-egi-km-prt]";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    'g.prototype={map:5(f){4 b=i g();4 l=2.h;c(l!=3){4 v=l[0];l=l[1];b.m(f(v))}6 b},filter:5(f){4 n=i g();4 l=2.h;c(l!=3){4 v=l[0];l=l[1];7(f(v))n.m(v)}6 n},join:5(r){4 s=i t();4 8=o;4 l=2.h;c(l!=3){7(8)8=p;j s.b+=9.a(r);s.b+=9.a(l[0]);l=l[1]}6 s.b},toString:5(){4 s=i t();4 8=o;4 l=2.h;s.b+=9.a("{");c(l!=3){7(8)8=p;j s.b+=9.a(", ");s.b+=9.a(9.a(l[0]));l=l[1]}s.b+=9.a("}");6 s.b},iterator:5(){6{h:2.h,hasNext:5(){6 2.h!=3},next:5(){7(2.h==3)6 3;4 x=2.h[0];2.h=2.h[1];6 x}}},remove:5(v){4 d=3;4 l=2.h;c(l!=3){7(l[0]==v){7(d==3)2.h=l[1];j d[1]=l[1];7(2.q==l)2.q=d;2.e--;6 o}d=l;l=l[1]}6 p},clear:5(){2.h=3;2.q=3;2.e=0},isEmpty:5(){6 2.h==3},pop:5(){7(2.h==3)6 3;4 x=2.h[0];2.h=2.h[1];7(2.h==3)2.q=3;2.e--;6 x},last:5(){6 2.q==3?3:2.q[0]},8:5(){6 2.h==3?3:2.h[0]},push:5(k){4 x=[k,2.h];2.h=x;7(2.q==3)2.q=x;2.e++},m:5(k){4 x=[k];7(2.h==3)2.h=x;j 2.q[1]=x;2.q=x;2.e++},__class__:g}',
    [],
    30,
    "||this|null|var|function|return|if|first|Std|string||while|prev|length||List||new|else|item||add|l2|true|false||sep||StringBuf".split(
      "|"
    ),
    0,
    {}
  )
);
var Main = function () {};
Main.__name__ = true;
Main.main = function () {
  if (js.Lib.document.getElementById("cvsBook") == null) Zoom.Load();
  else RunTime.init();
};
Main.testCss = function () {
  var t = new core.Tweener();
  var max = 20;
  var cvs = js.Lib.document.getElementById("img");
  t.onChange = function (count) {
    var l = Std.string(count * 30);
    cvs.style.left = l;
  };
  t.start(max);
};
var core = core || {};
core.Book = function () {
  this.pages = new Array();
  this.hotlinks = new Array();
  this.videos = new Array();
  this.audios = new Array();
  this.buttons = new Array();
  this.highlights = new Array();
  this.notes = new Array();
  this.bookmarks = new Array();
  this.slideshows = new Array();
  this.bookId = "";
  this.bookTitle = "";
  this.analyticsUA = "";
  this.singlepageMode = false;
  this.rightToLeft = false;
  this.menuTocVisible = true;
  this.menuThumbsVisible = true;
  this.menuSearchVisible = true;
  this.menuAutoFlipVisible = true;
  this.menuZoomVisible = true;
  this.menuBookmarkVisible = true;
  this.menuNoteVisible = true;
  this.menuHighlightVisible = true;
};
core.Book.__name__ = true;
core.Book.prototype = {
  preloadPages: function (num) {
    if (num == null) num = 0;
    if (num < 0 || num > this.pages.length - 1) return;
    var p = [];
    p.push(num);
    p.push(num + 1);
    p.push(num - 1);
    p.push(num + 2);
    p.push(num - 2);
    p.push(num + 3);
    p.push(num - 3);
    p.push(num + 4);
    p.push(num + 5);
    var _g1 = 0,
      _g = p.length;
    while (_g1 < _g) {
      var i = _g1++;
      var index = p[i];
      if (index >= 0 && index < this.pages.length) {
        var page = this.pages[index];
        page.getImagePage();
        page.loadBigImagePage();
      }
    }
  },
  __class__: core.Book,
};
var haxe = haxe || {};
haxe.Timer = function (time_ms) {
  var me = this;
  this.id = window.setInterval(function () {
    me.run();
  }, time_ms);
};
haxe.Timer.__name__ = true;
haxe.Timer.delay = function (f, time_ms) {
  var t = new haxe.Timer(time_ms);
  t.run = function () {
    t.stop();
    f();
  };
  return t;
};
haxe.Timer.measure = function (f, pos) {
  var t0 = haxe.Timer.stamp();
  var r = f();
  haxe.Log.trace(haxe.Timer.stamp() - t0 + "s", pos);
  return r;
};
haxe.Timer.stamp = function () {
  return new Date().getTime() / 1000;
};
haxe.Timer.prototype = {
  run: function () {},
  stop: function () {
    if (this.id == null) return;
    window.clearInterval(this.id);
    this.id = null;
  },
  __class__: haxe.Timer,
};
var RunTime = function () {};
RunTime.__name__ = true;
RunTime.alert = function (msg) {
  js.Lib.alert(msg);
};
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return c.toString(36);
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "[13-9a-j]";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    '1.init=function(){1.kvPrex=3.4.9.location.pathname.split("?")[0];1.g=3.4.5.8("g");1.a=3.4.9.5.e.a;1.b=3.4.9.5.e.b;1.defaultPageNum=Std.parseInt(orc.utils.Util.getUrlParam("page"));h 6=3.4.5.8("hiddenSearch");h c=6.d;6.d="";1.searchHtmlCache=c;6=3.4.5.8("hiddenInput");c=6.d;6.d="";1.inputHtmlCache=c;1.i=3.4.5.8("i");1.7=3.4.5.8("loading");1.7.f.top=(1.b-1.7.b)/2+"j";1.7.f.left=(1.a-1.7.a)/2+"j";1.7.f.display="inline";1.resizeTimer.run=1.OnResize;3.4.9.5.e.onwebkitfullscreenchange=1.onFullscreenChange;1.preRequestBookInfo()}',
    [],
    20,
    "|RunTime||js|Lib|document|dom|divLoading|getElementById|window|clientWidth|clientHeight|html|innerHTML|body|style|loadingLogo|var|bgImage|px".split(
      "|"
    ),
    0,
    {}
  )
);
RunTime.onFullscreenChange = function (e) {
  RunTime.isFullscreen = !RunTime.isFullscreen;
  if (RunTime.isFullscreen) RunTime.resizeTimer.stop();
  else {
    RunTime.resizeTimer = new haxe.Timer(600);
    RunTime.resizeTimer.run = RunTime.OnResize;
  }
};
RunTime.OnResize = function () {
  if (RunTime.isFullscreen) return;
  if (
    RunTime.clientWidth != js.Lib.window.document.body.clientWidth ||
    RunTime.clientHeight != js.Lib.window.document.body.clientHeight
  )
    RunTime.reload();
};
RunTime.loadState = function () {
  var bbv = true;
  var params = orc.utils.Util.getUrlParams();
  var _g1 = 0,
    _g = params.length;
  while (_g1 < _g) {
    var i = _g1++;
    var item = params[i];
    if (item.key == "page") {
      var num = Std.parseInt(item.value);
      RunTime.defaultPageNum = num;
    } else if (item.key == "bbv") {
      if (item.value == "1") bbv = true;
      else if (item.value == "0") bbv = false;
    } else if (item.key == "pcode") RunTime.pcode = item.value;
  }
  if (bbv == true) RunTime.flipBook.showBottomBar();
  else RunTime.flipBook.hideBottomBar(null, false);
};
RunTime.requestLanguages = function (callbackFunc) {
  orc.utils.Util.request(
    RunTime.urlLang,
    function (data) {
      var xml = Xml.parse(data);
      var i = xml.elementsNamed("languages");
      if (i.hasNext() == false) return;
      xml = i.next();
      i = xml.elementsNamed("language");
      if (i.hasNext() == false) return;
      var dftLang = null;
      while (i.hasNext() == true) {
        var node = i.next();
        var lang = new core.LangCfg();
        var cnt = node.get("content");
        var dft = node.get("default");
        if (dftLang == null) dftLang = lang;
        lang.content = cnt;
        if (dft == "yes" || dft == "Yes" || dft == "YES") {
          lang.isDefault = true;
          dftLang = lang;
        }
        RunTime.languages.push(lang);
      }
      if (dftLang != null) {
        var urlLangResource =
          RunTime.urlRoot + "data/languages/" + dftLang.content + ".xml";
        L.loadRemote(urlLangResource, callbackFunc, callbackFunc);
      } else callbackFunc();
    },
    callbackFunc
  );
};
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < 62 ? "" : e(parseInt(c / 62))) +
        ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "([13-9abd-zA-Z]|1\\w)";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    '1.preRequestBookInfo=E(){orc.utils.Util.request(1.urlBookinfo,E(F){1.bookInfo=Xml.parse(F);1.getBookInfo();r(1.book.singlepageMode){1.3=s G();1.t=H}I r(1.b>1.a){1.3=s G();1.t=H}I{1.3=s DoubleFlipBook();1.t=false}1.3.k=4.5.6.7("k");8 J=4.5.6.7("leftpage");1.3.zoomLeftPage=J;8 K=4.5.6.7("rightpage");1.3.zoomRightPage=K;8 l=4.5.6.7("l");8 m=4.5.6.7("m");1.3.l=l;1.3.m=m;8 n=4.5.6.7("n");8 o=4.5.6.7("o");1.3.n=n;1.3.o=o;1.3.L=4.5.6.7("cvsBook");1.3.M=4.5.6.7("M");1.3.N=4.5.6.7("N");1.3.O=4.5.6.7("O");1.3.P=4.5.6.7("P");1.3.Q=4.5.6.7("Q");1.3.R=4.5.6.7("R");1.3.S=4.5.6.7("S");1.3.T=4.5.6.7("T");1.3.U=4.5.6.7("U");1.3.u=4.5.6.7("u");1.3.v=4.5.6.7("v");1.3.w=4.5.6.7("w");1.3.x=4.5.6.7("x");1.3.V=4.5.6.7("V");1.3.W=4.5.6.7("W");1.3.X=4.5.6.7("X");1.3.Y=4.5.6.7("Y");1.3.Z=4.5.6.7("Z");1.3.10=4.5.6.7("10");1.3.11=4.5.6.7("11");1.3.y=4.5.6.7("y");1.3.z=4.5.6.7("z");1.3.12=4.5.6.7("12");1.3.13=4.5.6.7("13");1.3.A=4.5.6.7("A");1.3.A.9.14=1.15;1.3.16=4.5.6.7("16");1.3.B=4.5.6.7("B");1.3.B.9.14=1.15;1.3.z.9.zIndex=10000;1.3.17=4.5.6.7("17");1.3.18=4.5.6.7("18");1.3.19=4.5.6.7("19");1.3.1a=4.5.6.7("1a");1.3.1b=4.5.6.7("1b");1.3.1c=4.5.6.7("1c");1.3.1d=4.5.6.7("1d");1.3.1e=4.5.6.7("1e");1.3.1f=4.5.6.7("1f");1.3.1g=4.5.6.7("1g");8 C=(1.a-500)/2|0;1.3.y.9.C=Std.string(C)+"D";8 c=1.3.L;1.3.canvas=c;1.3.attachActions();c.d=1.a;c.e=1.b;r(1.a<800){4.5.6.7("w").9.p="q";4.5.6.7("u").9.p="q";4.5.6.7("v").9.p="q";4.5.6.7("x").9.p="q"}8 f=4.5.6.7("f");1.3.f=f;f.d=1.a;f.e=1.b;8 g=4.5.6.7("g");1.3.g=g;g.d=1.a;g.e=1.b;8 h=4.5.6.7("h");1.3.h=h;h.d=1.a;h.e=1.b;8 i=4.5.6.7("i");1.3.i=i;i.d=1.a;i.e=1.b;1.3.k.9.d=1.a+"D";1.3.k.9.e=1.b+"D";1.3.afterInit();1.3.j.ctx=1.3.getContext();1.3.j.ctxButton=1.3.getButtonContext();1.3.j.ctxHighLight=1.3.getHighLightContext();1.3.j.ctxNote=1.3.getNoteContext();1.3.j.ctxBookmark=1.3.getBookmarkContext();1.requestLanguages(1.requestBookInfo)})}',
    [],
    79,
    "|RunTime||flipBook|js|Lib|document|getElementById|var|style|clientWidth|clientHeight||width|height|cvsButton|cvsHighLight|cvsNote|cvsBookmark|bookContext|zoom|leftPageLock|rightPageLock|leftLockIcon|rightLockIcon|marginLeft|10px|if|new|singlePage|btnPrevPage|btnNextPage|btnFirstPage|btnLastPage|topBar|topBarContent|bottomBarBg|topMenuBarBg|left|px|function|data|FlipBook|true|else|bookleftpage|bookrightpage|root|mask|tbPageCount|tbPage|btnContents|btnThumbs|btnSearch|btnMask|btnBookMark|btnNote|btnAutoFlip|btnDownload|btnAboutUs|btnEmail|btnSns|btnShowTxt|imgLogo|topFullTextContent|bottomBar|opacity|bottomBarAlpha|topMenuBar|menuParent|maskPopup|cvsSlideshow|cvsVideo|cvsOthers|cvsAudio|cvsLeftPageBgAudio|cvsRightPageBgAudio|cvsYoutube|btnZoom".split(
      "|"
    ),
    0,
    {}
  )
);
RunTime.requestBookInfo = function () {
  orc.utils.Util.request(RunTime.urlBookinfo, function (data) {
    RunTime.bookInfo = Xml.parse(data);
    RunTime.loadBookInfo();
    RunTime.key = RunTime.calcKey(
      RunTime.book.pageWidth | 0,
      RunTime.book.pageHeight | 0
    );
    var defaultKey = "Pwd-Empty";
    if (RunTime.pcode.length > 0) defaultKey = RunTime.decode64(RunTime.pcode);
    RunTime.afterRequestBookInfo();
    if (!RunTime.singlePage) RunTime.flipBook.requestMainAd();
    RunTime.hideLoadingLogo();
  });
};
RunTime.InputPwd = function () {
  RunTime.showPopupMaskLayer();
  RunTime.flipBook.cvsOthers.innerHTML = core.HtmlHelper.toInputPwdHtml();
};
RunTime.InputUnlock = function () {
  RunTime.showPopupMaskLayer();
  RunTime.flipBook.cvsOthers.innerHTML = core.HtmlHelper.toInputUnlockPwdHtml();
};
RunTime.tryPwd = function (pwd) {
  RunTime.pcode = StringTools.urlEncode(RunTime.encode64(pwd, false));
  RunTime.afterRequestBookInfo();
};
RunTime.tryUnlock = function (pwd) {
  RunTime.pcode = StringTools.urlEncode(RunTime.encode64(pwd, false));
  js.Lib.document.getElementById("inputBox").style.display = "none";
  RunTime.clearPopupContents();
  RunTime.bLocked = false;
  RunTime.flipBook.leftPageLock.style.display = "none";
  RunTime.flipBook.rightPageLock.style.display = "none";
  RunTime.flipBook.bookContext.render();
};
RunTime.afterRequestBookInfo = function () {
  RunTime.flipBook.cvsOthers.innerHTML = "";
  RunTime.clearPopupContents();
  RunTime.requestPages();
  RunTime.useAnalyticsUA(RunTime.book.analyticsUA, RunTime.book.bookId);
};
RunTime.requestPages = function () {
  orc.utils.Util.request(RunTime.urlPageInfo, function (data) {
    RunTime.pageInfo = Xml.parse(data);
    RunTime.loadPageInfo();
    RunTime.requestHotlinks();
    RunTime.requestHotlinks2();
    RunTime.requestSlideshow();
    RunTime.requestContents();
    RunTime.requestShare();
    RunTime.requestAbout();
    RunTime.requestVideos();
    RunTime.reauestAudios();
    RunTime.requestButtons();
    RunTime.readLocalHighLights();
    RunTime.readLocalNotes();
    RunTime.requestBookmark();
    RunTime.readLocalBookmarks();
  });
};
RunTime.requestSlideshow = function (onSuccess) {
  orc.utils.Util.request(RunTime.urlSlideshow, function (data) {
    var dom = new DOMParser();
    var ctx = new Xml2Html();
    RunTime.slideshow = dom.parseFromString(
      ctx.prepareXmlAsHtml(data),
      "text/xml"
    );
    RunTime.loadSlideshow(ctx);
    if (RunTime.flipBook != null) {
      RunTime.flipBook.loadCtxSlideshow();
      RunTime.flipBook.bookContext.render();
    }
    if (onSuccess != null) onSuccess();
  });
};
RunTime.requestHotlinks = function (onSuccess) {
  orc.utils.Util.request(RunTime.urlHotlinks, function (data) {
    var dom = new DOMParser();
    var ctx = new Xml2Html();
    RunTime.hotlinkInfo = dom.parseFromString(
      ctx.prepareXmlAsHtml(data),
      "text/xml"
    );
    RunTime.loadHotlinks(ctx);
    if (RunTime.flipBook != null) {
      RunTime.flipBook.loadCtxHotlinks();
      RunTime.flipBook.bookContext.render();
    }
    if (onSuccess != null) onSuccess();
  });
};
RunTime.requestHotlinks2 = function (onSuccess) {
  orc.utils.Util.request(RunTime.urlHotlinks2, function (data) {
    var dom = new DOMParser();
    var ctx = new Xml2Html();
    RunTime.hotlinkInfo = dom.parseFromString(
      ctx.prepareXmlAsHtml(data),
      "text/xml"
    );
    RunTime.loadHotlinks2(ctx);
    if (RunTime.flipBook != null) {
      RunTime.flipBook.loadCtxHotlinks();
      RunTime.flipBook.bookContext.render();
    }
    if (onSuccess != null) onSuccess();
  });
};
RunTime.requestVideos = function (onSuccess) {
  orc.utils.Util.request(RunTime.urlVideos, function (data) {
    RunTime.videoInfo = Xml.parse(data);
    RunTime.loadVideos();
    if (RunTime.flipBook != null) {
      RunTime.flipBook.updateVideos();
      RunTime.flipBook.bookContext.render();
    }
    if (onSuccess != null) onSuccess();
  });
};
RunTime.reauestAudios = function (onSuccess) {
  orc.utils.Util.request(RunTime.urlAudios, function (data) {
    RunTime.audioInfo = Xml.parse(data);
    RunTime.loadAudios();
    if (RunTime.flipBook != null) RunTime.flipBook.updateAudios();
    if (onSuccess != null) onSuccess();
  });
};
RunTime.requestButtons = function (onSuccess) {
  orc.utils.Util.request(RunTime.urlButtons, function (data) {
    RunTime.buttonInfo = Xml.parse(data);
    RunTime.loadButtons();
    if (RunTime.flipBook != null) {
      RunTime.flipBook.loadCtxButtons();
      RunTime.flipBook.bookContext.render();
    }
    if (onSuccess != null) onSuccess();
  });
};
RunTime.requestContents = function () {
  orc.utils.Util.request(RunTime.urlContents, function (data) {
    RunTime.contentInfo = Xml.parse(data);
  });
};
RunTime.requestShare = function () {
  orc.utils.Util.request(RunTime.urlShareInfo, function (data) {
    RunTime.shareInfo = Xml.parse(data);
  });
};
RunTime.requestAbout = function () {
  orc.utils.Util.request(RunTime.urlAbout, function (data) {
    RunTime.aboutInfo = Xml.parse(data);
  });
};
RunTime.requestSearch = function (invoke) {
  orc.utils.Util.request(RunTime.urlSearch, function (data) {
    var dom = new DOMParser();
    var ctx = new Xml2Html();
    RunTime.searchInfo = dom.parseFromString(
      ctx.prepareXmlAsHtml(data),
      "text/xml"
    );
    RunTime.loadPageContents(ctx);
    if (invoke != null) invoke(RunTime.book.pages);
  });
};
RunTime.requestBookmark = function () {
  orc.utils.Util.request(RunTime.urlBookmarks, function (data) {
    RunTime.bookmarkInfo = Xml.parse(data);
    var it = RunTime.bookmarkInfo.firstElement().elementsNamed("bookmark");
    do {
      var node = it.next();
      if (node == null) break;
      var bk = new core.Bookmark();
      bk.pageNum = node.get("page");
      bk.text = node.get("content");
      bk.onlyread = true;
      RunTime.book.bookmarks.push(bk);
    } while (it.hasNext());
  });
};
RunTime.invokePageContentsAction = function (invoke) {
  if (RunTime.searchInfo == null) RunTime.requestSearch(invoke);
  else invoke(RunTime.book.pages);
};
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return c.toString(36);
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "[1-9a-hjl-n]";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    '2.loadPageContents=function(d){7(2.e==8)return;1 f=2.e;1 3=f.g("5");1 9=0,h=3.a;j(9<h){1 i=9++;1 b=3[i];1 l=b.getAttribute("pageNumber");1 4=8;1 6=b.g("cdata");7(6!=8&&6.a>0){4=StringTools.trim(6[0].childNodes[0].nodeValue);4=d.getCData(4)}1 c=0,m=2.n.3.a;j(c<m){1 k=c++;1 5=2.n.3[k];7(5.id==l)5.content=4}}}',
    [],
    24,
    "|var|RunTime|pages|htmlText|page|htmlTextDoms|if|null|_g1|length|node|_g3|ctx|searchInfo|dom|getElementsByTagName|_g||while||pageNumVal|_g2|book".split(
      "|"
    ),
    0,
    {}
  )
);
RunTime.reload = function () {
  js.Lib.window.location.href = RunTime.flipBook.getFullUrl();
};
RunTime.navigateUrl = function (url) {
  if (url == null || url == "null" || url == "") return;
  js.Lib.window.location.href = url;
};
RunTime.showLoadingLogo = function (loadingUrl) {
  if (loadingUrl == null || loadingUrl == "") return;
  RunTime.loadingLogo.innerHTML = "<img src='" + loadingUrl + "'>";
  RunTime.loadingLogo.style.top =
    (RunTime.clientHeight - RunTime.loadingLogo.clientHeight) / 2 + "px";
  RunTime.loadingLogo.style.left =
    (RunTime.clientWidth - RunTime.loadingLogo.clientWidth) / 2 + "px";
  RunTime.loadingLogo.style.display = "inline";
};
RunTime.hideLoadingLogo = function () {
  RunTime.loadingLogo.innerHTML = "";
  RunTime.loadingLogo.style.display = "none";
};
RunTime.getBookInfo = function () {
  if (RunTime.bookInfo == null) return;
  var i = RunTime.bookInfo.elementsNamed("bookinfo");
  if (i.hasNext() == false) return;
  var node = i.next();
  RunTime.showLoadingLogo(node.get("loadingLogo"));
  RunTime.book.singlepageMode =
    node.get("singlepageMode") == "true" ? true : false;
  RunTime.book.rightToLeft = node.get("rightToLeft") == "true" ? true : false;
  RunTime.book.autoFlipSecond = Std.parseInt(node.get("autoFlipSeconds"));
  RunTime.book.gateway = node.get("gateway");
  RunTime.book.shareHref = node.get("shareUrl");
};
RunTime.loadBookInfo = function () {
  if (RunTime.bookInfo == null) return;
  var i = RunTime.bookInfo.elementsNamed("bookinfo");
  if (i.hasNext() == false) return;
  var node = i.next();
  var idVal = node.get("id");
  if (idVal == null) idVal = "";
  RunTime.book.bookId = idVal;
  RunTime.book.bookTitle = node.get("title");
  RunTime.book.bgColor = node.get("bgColor");
  RunTime.book.bgImageUrl = node.get("bgImage");
  RunTime.book.analyticsUA = node.get("analyticsUA");
  RunTime.book.password = node.get("password");
  RunTime.book.bookDownloadUrl = node.get("pdfUrl");
  var locked = node.get("protectedPages");
  if (locked != null && locked != "")
    RunTime.book.lockPages = locked.split(",");
  if (RunTime.book.bgColor == "" || RunTime.book.bgColor == null)
    RunTime.book.bgColor = "gray";
  if (RunTime.book.bgColor != "" && RunTime.book.bgColor != null)
    js.Lib.document.body.style.backgroundColor = RunTime.book.bgColor;
  if (RunTime.book.bgImageUrl != "" && RunTime.book.bgImageUrl != null) {
    js.Lib.document.body.style.backgroundImage =
      "url(" + RunTime.book.bgImageUrl + ")";
    js.Lib.document.body.style.backgroundRepeat = "no-repeat";
    js.Lib.document.body.style.backgroundPosition = "center";
    js.Lib.document.body.style.backgroundSize = "cover";
    js.Lib.document.body.style.backgroundClip = "border-box";
  }
  js.Lib.window.document.title = RunTime.book.bookTitle;
  var pageWidth = Std.parseFloat(node.get("pageWidth"));
  var pageHeight = Std.parseFloat(node.get("pageHeight"));
  RunTime.book.pageWidth = pageWidth;
  RunTime.book.pageHeight = pageHeight;
  var m = new orc.utils.ImageMetricHelper(pageWidth, pageHeight);
  var w = RunTime.clientWidth;
  var h = RunTime.clientHeight;
  var scale = m.getMaxFitScale(w, h);
  RunTime.defaultScale = scale;
  RunTime.imagePageWidth = pageWidth * scale;
  RunTime.imagePageHeight = pageHeight * scale;
  RunTime.pageScale = scale;
  var li = node.elementsNamed("bookLogo");
  if (li.hasNext() == true) {
    var lnode = li.next();
    RunTime.book.logoUrl = lnode.get("url");
    RunTime.book.logoHref = lnode.get("href");
  }
  if (RunTime.book.logoUrl != null && RunTime.book.logoUrl != "") {
    var hideLogo = false;
    if (RunTime.clientWidth < 600) hideLogo = true;
    if (js.Lib.window.navigator.userAgent.indexOf("iPhone") != -1)
      hideLogo = true;
    if (!hideLogo) {
      RunTime.flipBook.imgLogo.style.display = "inline";
      var obj = RunTime.flipBook.imgLogo;
      obj.src = RunTime.book.logoUrl;
      RunTime.flipBook.imgLogo.onclick = RunTime.onLogoClick;
    }
  }
  RunTime.flipBook.btnDownload.onclick = RunTime.onDownloadClick;
  var bottomMenuIter = node.elementsNamed("bottommenu");
  if (bottomMenuIter.hasNext() == true) {
    var bottomMenuNode = bottomMenuIter.next();
    //      RunTime.book.menuAutoFlipVisible = RunTime.getMenuVisible(bottomMenuNode, "autoflip");
    RunTime.book.menuAutoFlipVisible = "false";
    RunTime.book.menuSearchVisible = RunTime.getMenuVisible(
      bottomMenuNode,
      "search"
    );
    RunTime.book.menuTxtVisible = RunTime.getMenuVisible(bottomMenuNode, "txt");
    RunTime.book.menuZoomVisible = RunTime.getMenuVisible(
      bottomMenuNode,
      "zoom"
    );
    RunTime.book.menuBookmarkVisible = RunTime.getMenuVisible(
      bottomMenuNode,
      "bookmark"
    );
    //      RunTime.book.menuNoteVisible = RunTime.getMenuVisible(bottomMenuNode, "notes");
    RunTime.book.menuNoteVisible = "false";
    RunTime.book.menuHighlightVisible = RunTime.getMenuVisible(
      bottomMenuNode,
      "highlight"
    );
  }
  var leftMenuIter = node.elementsNamed("leftmenu");
  if (leftMenuIter.hasNext() == true) {
    var leftMenuNode = leftMenuIter.next();
    RunTime.book.menuTocVisible = RunTime.getMenuVisible(leftMenuNode, "toc");
    RunTime.book.menuThumbsVisible = RunTime.getMenuVisible(
      leftMenuNode,
      "thumbs"
    );
    RunTime.book.menuDownloadVisible = RunTime.getMenuEntirePDF(
      leftMenuNode,
      "pdf"
    );
    //RunTime.book.menuEmailVisible = RunTime.getMenuVisible(leftMenuNode, "email");
    RunTime.book.menuEmailVisible = "false";
    RunTime.book.menuSnsVisible = RunTime.getMenuVisible(leftMenuNode, "sns");
    //      RunTime.book.menuAboutUsVisible = RunTime.getMenuVisible(leftMenuNode, "about")
    RunTime.book.menuAboutUsVisible = "false";
  }
  RunTime.setMenuVisible(
    RunTime.flipBook.btnContents,
    RunTime.book.menuTocVisible
  );
  RunTime.setMenuVisible(
    RunTime.flipBook.btnThumbs,
    RunTime.book.menuThumbsVisible
  );
  RunTime.setMenuVisible(
    RunTime.flipBook.btnSearch,
    RunTime.book.menuSearchVisible
  );
  RunTime.setMenuVisible(
    RunTime.flipBook.btnAutoFlip,
    RunTime.book.menuAutoFlipVisible
  );
  RunTime.setMenuVisible(
    RunTime.flipBook.btnShowTxt,
    RunTime.book.menuTxtVisible
  );
  RunTime.setMenuVisible(RunTime.flipBook.btnZoom, false);
  RunTime.setMenuVisible(
    RunTime.flipBook.btnDownload,
    RunTime.book.menuDownloadVisible
  );
  RunTime.setMenuVisible(
    RunTime.flipBook.btnEmail,
    RunTime.book.menuEmailVisible
  );
  RunTime.setMenuVisible(RunTime.flipBook.btnSns, RunTime.book.menuSnsVisible);
  RunTime.setMenuVisible(
    RunTime.flipBook.btnAboutUs,
    RunTime.book.menuAboutUsVisible
  );
  var menuCount = 0;
  if (RunTime.book.menuTocVisible) menuCount += 1;
  if (RunTime.book.menuThumbsVisible) menuCount += 1;
  if (RunTime.book.menuSearchVisible) menuCount += 1;
  if (RunTime.book.menuAutoFlipVisible) menuCount += 1;
  if (RunTime.book.menuTxtVisible) menuCount += 1;
  var hideIcon = false;
  if (RunTime.clientWidth < 480) hideIcon = true;
  if (
    js.Lib.window.navigator.userAgent.indexOf("iPhone") != -1 &&
    RunTime.clientWidth < 480
  )
    hideIcon = true;
  if (hideIcon) {
    if (menuCount < 5)
      RunTime.setMenuVisible(
        RunTime.flipBook.btnMask,
        RunTime.book.menuHighlightVisible
      );
    if (RunTime.book.menuHighlightVisible) menuCount += 1;
    if (menuCount < 5) {
      RunTime.setMenuVisible(
        RunTime.flipBook.btnNote,
        RunTime.book.menuNoteVisible
      );
      menuCount += 1;
    }
    if (RunTime.book.menuNoteVisible) menuCount += 1;
    if (menuCount < 5) {
      RunTime.setMenuVisible(
        RunTime.flipBook.btnBookMark,
        RunTime.book.menuBookmarkVisible
      );
      menuCount += 1;
    }
  } else {
    RunTime.setMenuVisible(
      RunTime.flipBook.btnMask,
      RunTime.book.menuHighlightVisible
    );
    RunTime.setMenuVisible(
      RunTime.flipBook.btnNote,
      RunTime.book.menuNoteVisible
    );
    RunTime.setMenuVisible(
      RunTime.flipBook.btnBookMark,
      RunTime.book.menuBookmarkVisible
    );
  }
  RunTime.loadState();
};
RunTime.setMenuVisible = function (menu, visible) {
  if (visible == true) menu.style.display = "inline";
  else RunTime.flipBook.menuParent.removeChild(menu);
};
RunTime.getMenuVisible = function (parent, nodeName) {
  var li = parent.elementsNamed(nodeName);
  if (li.hasNext() == true) {
    var lnode = li.next();
    if (lnode.get("visible") == "false") return false;
  }
  return true;
};
RunTime.getMenuEntirePDF = function (parent, nodeName) {
  var li = parent.elementsNamed(nodeName);
  if (li.hasNext() == true) {
    var lnode = li.next();
    if (lnode.get("entirePDF") == "true") return true;
  }
  return false;
};
RunTime.onLogoClick = function (e) {
  if (
    RunTime.book == null ||
    RunTime.book.logoHref == null ||
    RunTime.book.logoHref == ""
  )
    return;
  js.Lib.window.location.href = RunTime.book.logoHref;
};
RunTime.onDownloadClick = function (e) {
  if (
    RunTime.book == null ||
    RunTime.book.bookDownloadUrl == null ||
    RunTime.book.bookDownloadUrl == ""
  )
    return;
  js.Lib.window.location.href = RunTime.book.bookDownloadUrl;
};
RunTime.onSendEmail = function () {
  RunTime.sendEmailByService();
};
RunTime.sendEmailResult = function () {
  if (RunTime.sendService.responseText.length < 2) {
    js.Lib.alert(L.s("EmailSendSuccessful"));
    var tomail = js.Lib.window.document.getElementById("tomail");
    tomail.value = "";
    var frommail = js.Lib.window.document.getElementById("youremail");
    frommail.value = "";
    var n = js.Lib.window.document.getElementById("yname");
    n.value = "";
    var m = js.Lib.window.document.getElementById("sharemsg");
    m.value = "";
  } else js.Lib.alert(L.s("EmailSendFailed"));
};
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return c.toString(36);
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "[1-9b-lo-r]";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    '1.sendEmailByService=function(){2 7=3.4.5.location.i.split("?")[0];7=7.substring(0,7.lastIndexOf("/"));2 d=3.4.5.8.9("d");2 j=3.4.5.8.9("youremail");2 n=3.4.5.8.9("yname");2 b=L.s("YourFriend","YourFirend")+e.f(n.6)+L.s("o","o");3.4.5.8.9("b").setAttribute("6",b);2 m=3.4.5.8.9("sharemsg");2 k=m.6;k+="<g /> <g /> "+e.f(n.6)+L.s("ShareEmailContent")+"<a i=\'"+1.c.l+"\' p=\'q\'>"+1.c.l+"<a/><g /> <g /><a i=\'"+1.c.l+"\' p=\'q\'><img src=\'"+7+"/"+1.c.pages[0].urlThumb+"\' ><a/>";1.h=new XMLHttpRequest();2 r="d="+e.f(d.6)+"&j="+e.f(j.6)+"&b="+b+"&message="+k;1.h.open("get",1.c.gateway+"?"+r,true);1.h.onreadystatechange=1.sendEmailResult;1.h.send()}',
    [],
    28,
    "|RunTime|var|js|Lib|window|value|baseUrl|document|getElementById||subject|book|tomail|Std|string|br|sendService|href|frommail|msg|shareHref|||ShareEmailTitle|target|_black|query".split(
      "|"
    ),
    0,
    {}
  )
);
RunTime.sendEmailByForm = function () {
  var n = js.Lib.window.document.getElementById("yname");
  var subject =
    L.s("YourFriend", "YourFirend") +
    Std.string(n.value) +
    L.s("ShareEmailTitle", "ShareEmailTitle");
  js.Lib.window.document
    .getElementById("subject")
    .setAttribute("value", subject);
  var m = js.Lib.window.document.getElementById("sharemsg");
  var msg = m.value;
  msg +=
    "<br /> <br /> " +
    Std.string(n.value) +
    L.s("ShareEmailContent") +
    "<a href='" +
    RunTime.book.shareHref +
    "' target='_black'>" +
    RunTime.book.shareHref +
    "<a/><br /> <br /><a href='" +
    RunTime.book.shareHref +
    "' target='_black'><img src='" +
    RunTime.book.pages[0].urlThumb +
    "' ><a/>";
  var b = js.Lib.window.document.getElementById("sendEmail");
  b.submit();
};
RunTime.loadPageInfo = function () {
  if (RunTime.pageInfo == null) return;
  var root = RunTime.pageInfo.firstElement();
  var val = root.get("preload");
  if (val.toLowerCase() == "true") RunTime.enablePreload = true;
  var i = root.elementsNamed("page");
  var num = 0;
  var numDouble = 0.1;
  while (i.hasNext() == true) {
    var node = i.next();
    var id = node.get("id");
    var source = node.get("source");
    var medium = node.get("medium");
    var thumb = node.get("thumb");
    var canZoom = !(node.get("canZoom") == "false");
    var page = new core.Page();
    RunTime.book.pages.push(page);
    if (medium == null || medium == "")
      medium = "content/medium/page" + Std.string(num + 1) + ".jpg";
    page.id = id;
    page.num = num;
    page.numInDoubleMode = Math.round(numDouble) | 0;
    page.urlPage = medium;
    page.urlBigPage = source;
    page.urlThumb = thumb;
    page.urlFullPage = source;
    page.canZoom = canZoom;
    page.locked = RunTime.checkLocked(num + 1);
    numDouble += 0.5;
    num++;
  }
  RunTime.flipBook.setPageCount(RunTime.book.pages.length);
  RunTime.flipBook.setCurrentPage(RunTime.defaultPageNum + 1);
  RunTime.flipBook.loadPage(RunTime.defaultPageNum);
};
RunTime.checkLocked = function (num) {
  if (RunTime.book.lockPages == null || RunTime.book.lockPages.length == 0)
    return false;
  var _g1 = 0,
    _g = RunTime.book.lockPages.length;
  while (_g1 < _g) {
    var i = _g1++;
    if (Std.parseInt(RunTime.book.lockPages[i]) == num) return true;
  }
  return false;
};
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < 62 ? "" : e(parseInt(c / 62))) +
        ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "[2-9a-hk-wzA-H]";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    '7.loadSlideshow=function(ctx){if(7.b==null)return;2 g=7.b;2 8=g.h("b");2 c=0,k=8.l;m(c<k){2 i=c++;2 4=8[i];2 n=4.5("page");2 o=4.5("x");2 p=4.5("y");2 q=4.5("r");2 s=4.5("t");2 u=4.5("time");2 v=4.5("w");2 z=4.5("sid");2 A=4.5("B");2 3=C D.SlideshowInfo();2 d=4.h("pic");2 e=0,E=d.l;m(e<E){2 j=e++;2 f=d[j];2 9=C D.Slide();9.F=f.5("F");9.G=f.5("G");3.8.H(9)}3.pageNum=6.parseInt(n)-1;3.x=6.a(o);3.y=6.a(p);3.r=6.a(q);3.t=6.a(s);3.interval=u;3.w=v;3.id=z;3.B=A;7.book.slideshows.H(3)}}',
    [],
    44,
    "||var|slideshowInfo|node|getAttribute|Std|RunTime|slides|slide|parseFloat|slideshow|_g1|pics|_g3|pnode|dom|getElementsByTagName|||_g|length|while|pageNumVal|xVal|yVal|widthVal|width|heightVal|height|timeVal|transitionVal|transition|||idVal|bgColorVal|bgColor|new|core|_g2|url|href|push".split(
      "|"
    ),
    0,
    {}
  )
);
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < 62 ? "" : e(parseInt(c / 62))) +
        ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "[2-9a-hj-wzA-U]";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    'e.loadHotlinks2=function(z){7(e.A==6)return;2 B=e.A;2 k=B.l("C");2 m=0,D=k.E;while(m<D){2 i=m++;2 4=k[i];2 F=4.5("page");2 G=4.5("x");2 f=4.5("f");2 H=4.5("y");2 I=4.5("n");2 J=4.5("o");2 g=4.5("g");2 8=4.5("p");2 q=4.5("K");2 r=4.5("L");2 s=4.5("M");2 t=4.5("N");2 u=4.5("O");2 P=4.5("Q");2 a=4.5("a");2 R=4.5("content");2 h=4.5("windowColor");2 b=R;2 j=4.l("cdata");7(j!=6&&j.E>0){b=v.trim(j[0].childNodes[0].nodeValue);b=z.getCData(b)}try{2 c=4.l("c")[0];7(c!=6)b="<c S=\\""+c.5("S")+"\\" frameborder=\\"0\\" style=\\"n:T%;o:T%\\" ></c>"}catch(ex){}2 3=new core.HotLink();3.tt=1;3.pageNum=9.w(F)-1;3.x=9.d(G);3.y=9.d(H);3.n=9.d(I);3.o=9.d(J);3.f=f;3.g=g;3.p=8;3.C=b;7(t!=6)3.N=9.w(t);7(u!=6)3.O=9.w(u);3.Q=P;3.M=s==6?"":s;7(a!=6)3.a=a==""?"_blank":a;7(h!=6)3.h=h;7(8!=6){8=v.U(8,"0x","#");8=v.U(8,"0X","#");3.p=8}7(q!=6)3.K=9.d(q);7(r!=6)3.L=r;e.book.hotlinks.push(3)}}',
    [],
    57,
    "||var|link|node|getAttribute|null|if|colorVal|Std|target|htmlText|iframe|parseFloat|RunTime|fontSize|fontName|window_color||htmlTextDoms|links|getElementsByTagName|_g1|width|height|color|opacityVal|destinationVal|typeVal|popupWidthVal|popupHeightVal|StringTools|parseInt|||ctx|hotlinkInfo|dom|text|_g|length|pageNumVal|xVal|yVal|widthVal|heightVal|opacity|destination|type|popupWidth|popupHeight|youtubeIdVal|youtubeId|wz|src|100|replace".split(
      "|"
    ),
    0,
    {}
  )
);
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < 62 ? "" : e(parseInt(c / 62))) +
        ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "[2-9a-hj-wzA-Q]";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    'e.loadHotlinks=function(u){7(e.v==6)return;2 w=e.v;2 h=w.j("hotlink");2 k=0,z=h.A;while(k<z){2 i=k++;2 3=h[i];2 B=3.5("page");2 C=3.5("x");2 D=3.5("y");2 E=3.5("l");2 F=3.5("m");2 9=3.5("G");2 n=3.5("H");2 o=3.5("I");2 p=3.5("J");2 q=3.5("K");2 r=3.5("L");2 M=3.5("N");2 b=3.5("b");2 f=3.5("windowColor");2 a=6;2 g=3.j("cdata");7(g!=6&&g.A>0){a=s.trim(g[0].childNodes[0].nodeValue);a=u.getCData(a)}try{2 c=3.j("c")[0];7(c!=6)a="<c O=\\""+c.5("O")+"\\" frameborder=\\"0\\" style=\\"l:P%;m:P%\\" ></c>"}catch(ex){}2 4=new core.HotLink();4.pageNum=8.t(B)-1;4.x=8.d(C);4.y=8.d(D);4.l=8.d(E);4.m=8.d(F);4.a=a;7(q!=6)4.K=8.t(q);7(r!=6)4.L=8.t(r);4.N=M;4.J=p==6?"":p;7(b!=6)4.b=b==""?"_blank":b;7(f!=6)4.f=f;7(9!=6){9=s.Q(9,"0x","#");9=s.Q(9,"0X","#");4.G=9}7(n!=6)4.H=8.d(n);7(o!=6)4.I=o;e.book.hotlinks.push(4)}}',
    [],
    53,
    "||var|node|link|getAttribute|null|if|Std|colorVal|htmlText|target|iframe|parseFloat|RunTime|window_color|htmlTextDoms|links||getElementsByTagName|_g1|width|height|opacityVal|destinationVal|typeVal|popupWidthVal|popupHeightVal|StringTools|parseInt|ctx|hotlinkInfo|dom|||_g|length|pageNumVal|xVal|yVal|widthVal|heightVal|color|opacity|destination|type|popupWidth|popupHeight|youtubeIdVal|youtubeId|src|100|replace".split(
      "|"
    ),
    0,
    {}
  )
);
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return c.toString(36);
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "[2-9a-hj-t]";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    '7.loadVideos=function(){if(7.b==null)return;2 a=0;2 i=7.b.firstElement().elementsNamed("3");while(i.hasNext()==8){2 4=i.next();2 c=4.5("page");2 d=4.5("x");2 e=4.5("y");2 f=4.5("g");2 h=4.5("j");2 k=4.5("l");2 m=4.5("n");2 o=4.5("p");2 q=4.5("r");2 s=4.5("t");2 3=new core.VideoInfo();3.pageNum=6.parseInt(c)-1;3.x=6.9(d);3.y=6.9(e);3.g=6.9(f);3.j=6.9(h);3.l=k=="8";3.n=m=="8";3.p=o=="8";3.r=q;3.t=s;3.id="video_embed_"+6.string(a);7.book.videos.push(3);a++}}',
    [],
    30,
    "||var|video|node|get|Std|RunTime|true|parseFloat|index|videoInfo|pageNumVal|xVal|yVal|widthVal|width|heightVal||height|autoPlayVal|autoPlay|showControlVal|showControl|autoRepeatVal|autoRepeat|urlVal|url|youtubeIdVal|youtubeId".split(
      "|"
    ),
    0,
    {}
  )
);
RunTime.loadAudios = function () {
  if (RunTime.audioInfo == null) return;
  var index = 0;
  var i = RunTime.audioInfo.firstElement().elementsNamed("soundpages");
  if (i.hasNext() == true) {
    var index1 = 0;
    i = i.next().elementsNamed("sound");
    while (i.hasNext() == true) {
      var node = i.next();
      var pageNumVal = node.get("pageNumber");
      var urlVal = node.get("url");
      var audio = new core.AudioInfo();
      audio.url = urlVal;
      audio.pageNum = Std.parseInt(pageNumVal) - 1;
      audio.id = "audio_embed_" + Std.string(index1);
      index1++;
      RunTime.book.audios.push(audio);
    }
  }
};
RunTime.extractCData = function (txt) {
  if (txt == null) return null;
  var first = txt.indexOf("<![CDATA[");
  var last = txt.lastIndexOf("]]>");
  if (first < 0 || last < 0 || last < first) return null;
  return HxOverrides.substr(
    txt,
    first + "<![CDATA[".length,
    last - first - "<![CDATA[".length
  );
};
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < 62 ? "" : e(parseInt(c / 62))) +
        ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "[2-9a-hj-wzA-N]";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    'b.loadButtons=function(){6(b.t==7)return;3 i=b.t.firstElement().u("button");while(i.hasNext()==true){3 2=i.v();3 w=2.4("page");3 z=2.4("x");3 A=2.4("y");3 B=2.4("j");3 C=2.4("k");3 D=2.4("E");3 l=2.4("F");3 m=2.4("G");3 n=2.4("H");3 I=2.4("J");3 K=2.4("L");3 c=2.4("c");3 o="";3 d="";3 e="";3 f=2.4("windowColor");3 9=2.4("9");6(2.4("p")!=7)o=2.4("p");6(2.4("q")!=7)d=2.4("q");6(2.4("r")!=7)e=2.4("r");3 g=b.extractCData(2.toString());try{3 a=2.u("a").v();6(a!=7)g="<a M=\\""+a.4("M")+"\\" frameborder=\\"0\\" style=\\"j:N%;k:N%\\" ></a>"}catch(ex){}3 5=new core.ButtonInfo();5.pageNum=8.s(w)-1;5.x=8.h(z);5.y=8.h(A);5.j=8.h(B);5.k=8.h(C);5.c=c==7?"onpage":c;5.g=g;6(m!=7)5.G=8.s(m);6(n!=7)5.H=8.s(n);5.J=I;5.L=K;5.F=l==7?"":l;5.E=D;5.p=o;6(9!=7)5.9=9==""?"_blank":9;6(f!=7)5.f=f;6(d!="")5.q=d;6(e!="")5.r=e;b.book.buttons.push(5)}}',
    [],
    50,
    "||node|var|get|item|if|null|Std|target|iframe|RunTime|layer|fontColorVal|fontSizeVal|window_color|htmlText|parseFloat||width|height|typeVal|popupWidthVal|popupHeightVal|textVal|text|fontColor|fontSize|parseInt|buttonInfo|elementsNamed|next|pageNumVal|||xVal|yVal|widthVal|heightVal|imageVal|image|type|popupWidth|popupHeight|youtubeIdVal|youtubeId|destinationVal|destination|src|100".split(
      "|"
    ),
    0,
    {}
  )
);
RunTime.getInputAndJumpToPage = function () {
  RunTime.flipBook.stopFlip();
  var t = RunTime.flipBook.tbPage;
  var val = t.value;
  val = StringTools.trim(val);
  var num = RunTime.flipBook.currentPageNum;
  if (val != "") num = Std.parseInt(val) - 1;
  if (num < 0) num = 0;
  else if (num > RunTime.book.pages.length - 1)
    num = RunTime.book.pages.length - 1;
  RunTime.flipBook.tbPage.setAttribute("value", Std.string(num + 1));
  RunTime.flipBook.turnToPage(num);
  RunTime.flipBook.tbPage.blur();
};
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return c.toString(36);
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "[3-9a-x]";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    '3.getPage=function(p,9,c){a(c==b)c=q;a(9==b)9=0;a(3.d==b||3.d.j==b)k b;r e=p+9;a(e<0||e>3.d.j.length-1)k b;r 4=3.d.j[e];4.9=9;a(c==q)4.5=3.getDrawParams();a(3.singlePage){3.6.f.s=4.5.l|0;3.6.f.t=4.5.m|0;3.6.f.7.n=g.h(4.5.u)+"8";3.6.f.7.o=g.h(4.5.v)+"8";3.6.i.7.s=(4.5.l|0)+"8";3.6.i.7.t=(4.5.m|0)+"8";3.6.i.7.n=g.h(4.5.u)+"8";3.6.i.7.o=g.h(4.5.v)+"8";3.6.w.7.n=((4.5.l-x)/2|0)+"8";3.6.w.7.o=((4.5.m-x)/2|0)+"8"}k 4}',
    [],
    34,
    "|||RunTime|page|drawParams|flipBook|style|px|pageOffset|if|null|useNewDrawParams|book|num|zoomLeftPage|Std|string|leftPageLock|pages|return|dw|dh|left|top|currentPageNum|true|var|width|height|dx|dy|leftLockIcon|128".split(
      "|"
    ),
    0,
    {}
  )
);
RunTime.getDrawParams = function (layout) {
  if (layout == null) layout = 0;
  var dp = new core.DrawParams();
  var im = new orc.utils.ImageMetricHelper(
    RunTime.book.pageWidth,
    RunTime.book.pageHeight
  );
  var cw = RunTime.clientWidth;
  if (layout != 0) cw = 0.5 * cw;
  var ch = RunTime.clientHeight;
  var scale = im.getMaxFitScale(cw, ch);
  var dw = scale * RunTime.book.pageWidth;
  var dh = scale * RunTime.book.pageHeight;
  var dx = 0.5 * (cw - dw);
  if (layout != 0) {
    if (RunTime.book.rightToLeft) dx = layout > 0 ? cw - dw : cw;
    else dx = layout < 0 ? cw - dw : cw;
  }
  var dy = 0.5 * (ch - dh);
  var sx = 0;
  var sy = 0;
  var sw = RunTime.book.pageWidth;
  var sh = RunTime.book.pageHeight;
  dp.sx = sx;
  dp.sy = sy;
  dp.sw = sw;
  dp.sh = sh;
  dp.dx = dx;
  dp.dy = dy;
  dp.dw = dw;
  dp.dh = dh;
  return dp;
};
RunTime.getGolobaDrawParams = function () {
  var dp = new core.DrawParams();
  var im = new orc.utils.ImageMetricHelper(
    RunTime.book.pageWidth * 2,
    RunTime.book.pageHeight
  );
  var cw = RunTime.clientWidth;
  var ch = RunTime.clientHeight;
  var scale = im.getMaxFitScale(cw, ch);
  var dw = scale * RunTime.book.pageWidth * 2;
  var dh = scale * RunTime.book.pageHeight;
  var dx = 0.5 * (cw - dw) * 2;
  var dy = 0.5 * (ch - dh) * 2;
  var sx = 0;
  var sy = 0;
  var sw = RunTime.book.pageWidth * 2;
  var sh = RunTime.book.pageHeight;
  dp.sx = sx;
  dp.sy = sy;
  dp.sw = sw;
  dp.sh = sh;
  dp.dx = dx;
  dp.dy = dy;
  dp.dw = dw;
  dp.dh = dh;
  return dp;
};
RunTime.saveLocal = function (key, val) {};
RunTime.getLocal = function (key) {
  return "";
};
RunTime.setUpdateFlag = function (bookId) {
  var prefix = bookId == null ? RunTime.book.bookId : bookId;
  RunTime.saveLocal(prefix + "-uploadFlag", "1");
};
RunTime.getAndResetUpdateFlag = function () {
  var val = RunTime.getLocal(RunTime.book.bookId + "-uploadFlag");
  RunTime.saveLocal(RunTime.book.bookId + "-uploadFlag", "");
  return val == "1";
};
RunTime.saveCurrentPageNum = function () {
  RunTime.savePageNum(Std.string(RunTime.flipBook.getCurrentPageNum()));
};
RunTime.savePageNum = function (val, bookId) {
  var prefix = bookId == null ? RunTime.book.bookId : bookId;
  RunTime.saveLocal(prefix + "-page", val);
};
RunTime.getAndResetSavedPageNum = function () {
  var val = RunTime.getLocal(RunTime.book.bookId + "-page");
  RunTime.savePageNum("");
  if (val == null || val == "") return 0;
  else return Std.parseInt(val);
};
RunTime.saveBottomBarVisible = function (val) {
  if (val == true)
    RunTime.saveLocal(RunTime.book.bookId + "-bottomBarVisible", "true");
  else RunTime.saveLocal(RunTime.book.bookId + "-bottomBarVisible", "false");
};
RunTime.getBottomBarVisible = function () {
  return RunTime.getLocal(RunTime.book.bookId + "-bottomBarVisible") == "true";
};
RunTime.encrypt = function (src) {
  return RunTime.encryptKey(src, RunTime.key);
};
RunTime.encryptKey = function (src, key) {
  var n = 0;
  var rtn = "";
  var _g1 = 0,
    _g = src.length - 1;
  while (_g1 < _g) {
    var i = _g1++;
    var c = HxOverrides.cca(src, i) + HxOverrides.cca(key, n);
    var s = String.fromCharCode(c);
    rtn += s;
    n++;
    if (n >= key.length - 1) n = 0;
  }
  if (src.length > 0) rtn = rtn + HxOverrides.substr(src, src.length - 1, null);
  return RunTime.encode64(rtn);
};
RunTime.encode64 = function (txt, padding) {
  if (padding == null) padding = true;
  var bytes = haxe.io.Bytes.alloc(txt.length);
  var _g1 = 0,
    _g = txt.length;
  while (_g1 < _g) {
    var i = _g1++;
    var c = txt.charCodeAt(i);
    bytes.b[i] = c & 255;
  }
  var c = new haxe.BaseCode(
    haxe.io.Bytes.ofString(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    )
  );
  var base64 = c.encodeBytes(bytes).toString();
  if (padding == true) {
    var remainder = base64.length % 4;
    if (remainder > 1) base64 += "=";
    if (remainder == 2) base64 += "=";
  }
  return base64;
};
RunTime.decode64 = function (txt) {
  var paddingSize = -1;
  if (txt.charAt(txt.length - 2) == "=") paddingSize = 2;
  else if (txt.charAt(txt.length - 1) == "=") paddingSize = 1;
  if (paddingSize != -1)
    txt = HxOverrides.substr(txt, 0, txt.length - paddingSize);
  var c = new haxe.BaseCode(
    haxe.io.Bytes.ofString(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    )
  );
  return c.decodeString(txt);
};
RunTime.calcKey = function (w, h) {
  var val = Std.string(w * h);
  val =
    HxOverrides.substr(val, val.length - 3, null) +
    HxOverrides.substr(val, 0, 2);
  var n = "";
  var _g1 = 0,
    _g = val.length;
  while (_g1 < _g) {
    var i = _g1++;
    var c = (HxOverrides.cca(val, i) / 2) | 0;
    n = n + StringTools.hex(c);
  }
  return n.toUpperCase();
};
RunTime.clearPopupContents = function () {
  js.Lib.document.getElementById("maskPopup").style.display = "none";
  js.Lib.document.getElementById("cvsOthers").innerHTML = "";
  RunTime.flipBook.resetNoteButton();
  RunTime.flipBook.resetHighlightButton();
};
RunTime.isPopupModal = function () {
  return js.Lib.document.getElementById("maskPopup").style.display == "none"
    ? false
    : true;
};
RunTime.clearAudio = function () {
  js.Lib.document.getElementById("cvsAudio").innerHTML = "";
};
RunTime.clearBgAudio = function () {
  RunTime.clearLeftBgAudio();
  RunTime.clearRightBgAudio();
};
RunTime.clearLeftBgAudio = function () {
  js.Lib.document.getElementById("cvsLeftPageBgAudio").innerHTML = "";
};
RunTime.clearRightBgAudio = function () {
  js.Lib.document.getElementById("cvsRightPageBgAudio").innerHTML = "";
};
RunTime.showPopupMaskLayer = function () {
  js.Lib.document.getElementById("maskPopup").style.display = "inline";
};
RunTime.playAudio = function () {
  var item = js.Lib.document
    .getElementById("cvsAudio")
    .getElementsByTagName("audio")[0];
  item.play();
};
RunTime.playVideo = function () {
  var item = js.Lib.document
    .getElementById("cvsOthers")
    .getElementsByTagName("video")[0];
  item.play();
};
RunTime.setOffset = function (dom, left, top) {
  var l = Math.round(left);
  var t = Math.round(top);
  dom.style.left = Std.string(l) + "px";
  dom.style.top = Std.string(t) + "px";
};
RunTime.useAnalyticsUA = function (ua, id) {
  if (RunTime.isNullOrEmpty(ua)) return;
  try {
    RunTime.trackerId = id;
    var gat = _gat;
    RunTime.tracker = gat._getTracker(ua);
    RunTime.tracker._initData();
  } catch (ex) {}
};
RunTime.log = function (action, msg) {
  if (RunTime.isNullOrEmpty(msg)) return;
  if (RunTime.useGoogleUaAsLogViewer == false) {
    js.Lib.alert(action + ":" + msg);
    return;
  }
  if (RunTime.tracker)
    RunTime.tracker._trackPageview(
      RunTime.trackerId + "/" + action + "/" + msg
    );
};
RunTime.logPageView = function (pageNum) {
  if (pageNum > 0) RunTime.log("page", Std.string(pageNum));
};
RunTime.logClickLink = function (url, url2) {
  if (RunTime.isNullOrEmpty(url) && RunTime.isNullOrEmpty(url2)) return;
  RunTime.log("link", RunTime.isNullOrEmpty(url) == false ? url : url2);
};
RunTime.logVideoView = function (url, url2) {
  if (RunTime.isNullOrEmpty(url) && RunTime.isNullOrEmpty(url2)) return;
  url = RunTime.removePrefix(url);
  RunTime.log("video", RunTime.isNullOrEmpty(url) == false ? url : url2);
};
RunTime.isNullOrEmpty = function (txt) {
  return txt == null || txt == "" || txt == "undefined";
};
RunTime.logAudioView = function (url) {
  if (url == null || url == "") return;
  url = RunTime.removePrefix(url);
  RunTime.log("audio", url);
};
RunTime.logSearch = function (keyword) {
  if (keyword == null || keyword == "") return;
  RunTime.log("search", keyword);
};
RunTime.removePrefix = function (url) {
  if (url == null || url == "") return url;
  else if (url.indexOf("http") == 0) return url;
  else {
    var i = url.lastIndexOf("/");
    return HxOverrides.substr(url, i + 1, null);
  }
};
RunTime.readLocalBookmarks = function () {
  var bookmarks = new Array();
  var i = 0;
  var _g1 = 0,
    _g = localStorage.length;
  while (_g1 < _g) {
    var i1 = _g1++;
    var szKey = localStorage.key(i1);
    if (szKey.indexOf(RunTime.kvPrex) == 0) {
      if (szKey.indexOf("@$bm$@") != -1) {
        var bookmark = new core.Bookmark();
        bookmark.fillData(szKey, localStorage.getItem(szKey));
        bookmarks.push(bookmark);
        RunTime.book.bookmarks.push(bookmark);
      }
    }
  }
  return bookmarks;
};
RunTime.readLocalHighLights = function () {
  var highlights = new Array();
  var i = 0;
  var _g1 = 0,
    _g = localStorage.length;
  while (_g1 < _g) {
    var i1 = _g1++;
    var szKey = localStorage.key(i1);
    if (szKey.indexOf(RunTime.kvPrex) == 0) {
      if (szKey.indexOf("@$ht$@") != -1) {
        var highlight = new core.HighLight();
        highlight.fillData(szKey, localStorage.getItem(szKey));
        highlights.push(highlight);
        RunTime.book.highlights.push(highlight);
      }
    }
  }
  RunTime.highLights = highlights;
  if (RunTime.flipBook != null) {
    RunTime.flipBook.loadCtxHighLights();
    RunTime.flipBook.bookContext.render();
  }
  return highlights;
};
RunTime.updateHighLightNote = function (text, color) {
  if (RunTime.currentHighLight != null) {
    RunTime.currentHighLight.updateText(text, color);
    RunTime.flipBook.resetHighlightButton();
    RunTime.flipBook.bookContext.render();
  }
};
RunTime.deleteHighLight = function () {
  if (RunTime.currentHighLight != null) {
    RunTime.currentHighLight.remove();
    HxOverrides.remove(RunTime.book.highlights, RunTime.currentHighLight);
    RunTime.currentHighLight = null;
    RunTime.flipBook.loadCtxHighLights();
    RunTime.flipBook.bookContext.render();
    RunTime.flipBook.resetHighlightButton();
  }
};
RunTime.readLocalNotes = function () {
  var notes = new Array();
  var i = 0;
  var _g1 = 0,
    _g = localStorage.length;
  while (_g1 < _g) {
    var i1 = _g1++;
    var szKey = localStorage.key(i1);
    if (szKey.indexOf(RunTime.kvPrex) == 0) {
      if (szKey.indexOf("@$ni$@") != -1) {
        var note = new core.NoteIcon();
        note.fillData(szKey, localStorage.getItem(szKey));
        notes.push(note);
        RunTime.book.notes.push(note);
      }
    }
  }
  RunTime.notes = notes;
  if (RunTime.flipBook != null) {
    RunTime.flipBook.loadCtxNotes();
    RunTime.flipBook.bookContext.render();
  }
  return notes;
};
RunTime.updateNote = function (text) {
  if (RunTime.currentNote != null) {
    RunTime.currentNote.updateText(text);
    RunTime.flipBook.resetNoteButton();
  }
};
RunTime.deleteNote = function () {
  if (RunTime.currentNote != null) {
    RunTime.currentNote.remove();
    HxOverrides.remove(RunTime.book.notes, RunTime.currentNote);
    RunTime.currentNote = null;
    RunTime.flipBook.loadCtxNotes();
    RunTime.flipBook.bookContext.render();
    RunTime.flipBook.resetNoteButton();
  }
};
RunTime.resizeSlide = function (p1, p2, p3, p4, p5) {
  var scale = p3 / p1.height;
  var leftVal = (p2 - p1.width * scale) / 2;
  js.Lib.document.getElementById(p4).style.width =
    ((p1.width * scale) | 0) + "px";
  js.Lib.document.getElementById(p4).style.marginLeft = leftVal + "px";
};
var Std = function () {};
Std.__name__ = true;
Std["is"] = function (v, t) {
  return js.Boot.__instanceof(v, t);
};
Std.string = function (s) {
  return js.Boot.__string_rec(s, "");
};
Std["int"] = function (x) {
  return x | 0;
};
Std.parseInt = function (x) {
  var v = parseInt(x, 10);
  if (v == 0 && (HxOverrides.cca(x, 1) == 120 || HxOverrides.cca(x, 1) == 88))
    v = parseInt(x);
  if (isNaN(v)) return null;
  return v;
};
Std.parseFloat = function (x) {
  return parseFloat(x);
};
Std.random = function (x) {
  return Math.floor(Math.random() * x);
};
var StringBuf = function () {
  this.b = "";
};
StringBuf.__name__ = true;
StringBuf.prototype = {
  toString: function () {
    return this.b;
  },
  addSub: function (s, pos, len) {
    this.b += HxOverrides.substr(s, pos, len);
  },
  addChar: function (c) {
    this.b += String.fromCharCode(c);
  },
  add: function (x) {
    this.b += Std.string(x);
  },
  __class__: StringBuf,
};
var StringTools = function () {};
StringTools.__name__ = true;
StringTools.urlEncode = function (s) {
  return encodeURIComponent(s);
};
StringTools.urlDecode = function (s) {
  return decodeURIComponent(s.split("+").join(" "));
};
StringTools.htmlEscape = function (s) {
  return s
    .split("&")
    .join("&amp;")
    .split("<")
    .join("&lt;")
    .split(">")
    .join("&gt;");
};
StringTools.htmlUnescape = function (s) {
  return s
    .split("&gt;")
    .join(">")
    .split("&lt;")
    .join("<")
    .split("&amp;")
    .join("&");
};
StringTools.startsWith = function (s, start) {
  return (
    s.length >= start.length && HxOverrides.substr(s, 0, start.length) == start
  );
};
StringTools.endsWith = function (s, end) {
  var elen = end.length;
  var slen = s.length;
  return slen >= elen && HxOverrides.substr(s, slen - elen, elen) == end;
};
StringTools.isSpace = function (s, pos) {
  var c = HxOverrides.cca(s, pos);
  return (c >= 9 && c <= 13) || c == 32;
};
StringTools.ltrim = function (s) {
  var l = s.length;
  var r = 0;
  while (r < l && StringTools.isSpace(s, r)) r++;
  if (r > 0) return HxOverrides.substr(s, r, l - r);
  else return s;
};
StringTools.rtrim = function (s) {
  var l = s.length;
  var r = 0;
  while (r < l && StringTools.isSpace(s, l - r - 1)) r++;
  if (r > 0) return HxOverrides.substr(s, 0, l - r);
  else return s;
};
StringTools.trim = function (s) {
  return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.rpad = function (s, c, l) {
  var sl = s.length;
  var cl = c.length;
  while (sl < l)
    if (l - sl < cl) {
      s += HxOverrides.substr(c, 0, l - sl);
      sl = l;
    } else {
      s += c;
      sl += cl;
    }
  return s;
};
StringTools.lpad = function (s, c, l) {
  var ns = "";
  var sl = s.length;
  if (sl >= l) return s;
  var cl = c.length;
  while (sl < l)
    if (l - sl < cl) {
      ns += HxOverrides.substr(c, 0, l - sl);
      sl = l;
    } else {
      ns += c;
      sl += cl;
    }
  return ns + s;
};
StringTools.replace = function (s, sub, by) {
  return s.split(sub).join(by);
};
StringTools.hex = function (n, digits) {
  var s = "";
  var hexChars = "0123456789ABCDEF";
  do {
    s = hexChars.charAt(n & 15) + s;
    n >>>= 4;
  } while (n > 0);
  if (digits != null) while (s.length < digits) s = "0" + s;
  return s;
};
StringTools.fastCodeAt = function (s, index) {
  return s.charCodeAt(index);
};
StringTools.isEOF = function (c) {
  return c != c;
};
var XMLHttpRequestResponseType = {
  __ename__: true,
  __constructs__: ["arraybuffer", "blob", "document", "json", "text"],
};
XMLHttpRequestResponseType.arraybuffer = ["arraybuffer", 0];
XMLHttpRequestResponseType.arraybuffer.toString = $estr;
XMLHttpRequestResponseType.arraybuffer.__enum__ = XMLHttpRequestResponseType;
XMLHttpRequestResponseType.blob = ["blob", 1];
XMLHttpRequestResponseType.blob.toString = $estr;
XMLHttpRequestResponseType.blob.__enum__ = XMLHttpRequestResponseType;
XMLHttpRequestResponseType.document = ["document", 2];
XMLHttpRequestResponseType.document.toString = $estr;
XMLHttpRequestResponseType.document.__enum__ = XMLHttpRequestResponseType;
XMLHttpRequestResponseType.json = ["json", 3];
XMLHttpRequestResponseType.json.toString = $estr;
XMLHttpRequestResponseType.json.__enum__ = XMLHttpRequestResponseType;
XMLHttpRequestResponseType.text = ["text", 4];
XMLHttpRequestResponseType.text.toString = $estr;
XMLHttpRequestResponseType.text.__enum__ = XMLHttpRequestResponseType;
var Xml = function () {};
Xml.__name__ = true;
Xml.parse = function (str) {
  return haxe.xml.Parser.parse(str);
};
Xml.createElement = function (name) {
  var r = new Xml();
  r.nodeType = Xml.Element;
  r._children = new Array();
  r._attributes = new Hash();
  r.setNodeName(name);
  return r;
};
Xml.createPCData = function (data) {
  var r = new Xml();
  r.nodeType = Xml.PCData;
  r.setNodeValue(data);
  return r;
};
Xml.createCData = function (data) {
  var r = new Xml();
  r.nodeType = Xml.CData;
  r.setNodeValue(data);
  return r;
};
Xml.createComment = function (data) {
  var r = new Xml();
  r.nodeType = Xml.Comment;
  r.setNodeValue(data);
  return r;
};
Xml.createDocType = function (data) {
  var r = new Xml();
  r.nodeType = Xml.DocType;
  r.setNodeValue(data);
  return r;
};
Xml.createProlog = function (data) {
  var r = new Xml();
  r.nodeType = Xml.Prolog;
  r.setNodeValue(data);
  return r;
};
Xml.createDocument = function () {
  var r = new Xml();
  r.nodeType = Xml.Document;
  r._children = new Array();
  return r;
};
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < 62 ? "" : e(parseInt(c / 62))) +
        ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "[2-9ac-jmo-rtuwyzA-M]";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    '6.prototype={E:7(){3(2.4==6.PCData)5 2.o;3(2.4==6.CData)5"<![CDATA["+2.o+"]]>";3(2.4==6.Comment)5"<!--"+2.o+"-->";3(2.4==6.DocType)5"<!DOCTYPE "+2.o+">";3(2.4==6.Prolog)5"<?"+2.o+"?>";8 s=new StringBuf();3(2.4==6.e){s.b+=g.h("<");s.b+=g.h(2.t);8 $z=2.p.F();q($z.u()){8 k=$z.w();s.b+=g.h(" ");s.b+=g.h(k);s.b+=g.h("=\\"");s.b+=g.h(2.p.A(k));s.b+=g.h("\\"")}3(2.9.r==0){s.b+=g.h("/>");5 s.b}s.b+=g.h(">")}8 $B=2.G();q($B.u()){8 x=$B.w();s.b+=g.h(x.E())}3(2.4==6.e){s.b+=g.h("</");s.b+=g.h(2.t);s.b+=g.h(">")}5 s.b},insertChild:7(x,H){3(2.9==f)a"c i";3(x.j!=f)C.y(x.j.9,x);x.j=2;2.9.splice(H,0,x)},removeChild:7(x){3(2.9==f)a"c i";8 b=C.y(2.9,x);3(b)x.j=f;5 b},addChild:7(x){3(2.9==f)a"c i";3(x.j!=f)C.y(x.j.9,x);x.j=2;2.9.push(x)},firstElement:7(){3(2.9==f)a"c i";8 d=0;8 l=2.9.r;q(d<l){8 n=2.9[d];3(n.4==6.e)5 n;d++}5 f},firstChild:7(){3(2.9==f)a"c i";5 2.9[0]},elementsNamed:7(D){3(2.9==f)a"c i";5{d:0,x:2.9,u:7(){8 k=2.d;8 l=2.x.r;q(k<l){8 n=2.x[k];3(n.4==6.e&&n.t==D)I;k++}2.d=k;5 k<l},w:7(){8 k=2.d;8 l=2.x.r;q(k<l){8 n=2.x[k];k++;3(n.4==6.e&&n.t==D){2.d=k;5 n}}5 f}}},elements:7(){3(2.9==f)a"c i";5{d:0,x:2.9,u:7(){8 k=2.d;8 l=2.x.r;q(k<l){3(2.x[k].4==6.e)I;k+=1}2.d=k;5 k<l},w:7(){8 k=2.d;8 l=2.x.r;q(k<l){8 n=2.x[k];k+=1;3(n.4==6.e){2.d=k;5 n}}5 f}}},G:7(){3(2.9==f)a"c i";5{d:0,x:2.9,u:7(){5 2.d<2.x.r},w:7(){5 2.x[2.d++]}}},attributes:7(){3(2.4!=6.e)a"c 4";5 2.p.F()},J:7(m){3(2.4!=6.e)a"c 4";5 2.p.J(m)},y:7(m){3(2.4!=6.e)a"c 4";2.p.y(m)},K:7(m,L){3(2.4!=6.e)a"c 4";2.p.K(m,L)},A:7(m){3(2.4!=6.e)a"c 4";5 2.p.A(m)},getParent:7(){5 2.j},setNodeValue:7(v){3(2.4==6.e||2.4==6.M)a"c 4";5 2.o=v},getNodeValue:7(){3(2.4==6.e||2.4==6.M)a"c 4";5 2.o},setNodeName:7(n){3(2.4!=6.e)a"c 4";5 2.t=n},getNodeName:7(){3(2.4!=6.e)a"c 4";5 2.t},__class__:6}',
    [],
    49,
    "||this|if|nodeType|return|Xml|function|var|_children|throw||bad|cur|Element|null|Std|string|nodetype|_parent|||att||_nodeValue|_attributes|while|length||_nodeName|hasNext||next||remove|it0|get|it1|HxOverrides|name|toString|keys|iterator|pos|break|exists|set|value|Document".split(
      "|"
    ),
    0,
    {}
  )
);
var Xml2Html = function () {};
Xml2Html.__name__ = true;
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return c.toString(36);
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "[13-9ac-hjl-q]";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    'o.prototype={prepareXmlAsHtml:p(6){7.8=g Array();6=StringTools.replace(6,"<![CDATA[","]]>");1 c=6.split("]]>");d(c.h==0)9 6;1 e=g StringBuf();1 k=0;1 4=0,f=c.h;q(4<f){1 i=4++;1 a=c[i];d(i%2==0)e.b+=j.l(a);else{1 3=j.l(k);e.b+=j.l("<5>"+3+"</5>");1 5=g CData();5.3=3;5.a=a;7.8.push(5);k++}}9 e.b},getCData:p(3){d(7.8==m)9 m;1 4=0,f=7.8.h;q(4<f){1 i=4++;1 n=7.8[i];d(n.3==3)9 n.a}9 m},__class__:o}',
    [],
    27,
    "|var||key|_g1|cdata|txt|this|map|return|val||lines|if|buff|_g|new|length||Std||string|null|item|Xml2Html|function|while".split(
      "|"
    ),
    0,
    {}
  )
);
var Zoom = function () {};
Zoom.__name__ = true;
Zoom.getContext = function () {
  return Zoom.cvsZoom.getContext("2d");
};
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < 62 ? "" : e(parseInt(c / 62))) +
        ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "[2-9a-hj-zA-F]";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    '2.Load=function(){2.q=a.b.c.l("r");2.g=a.b.c.l("g");2.4=a.b.c.l("4");2.4.onclick=2.5;2.4.s=2.t;2.4.u=2.5;2.4.ontouchmove=2.5;2.4.ontouchend=2.5;2.4.ontouchcancel=2.5;2.4.gestureend=2.5;2.4.gesturestart=2.5;2.4.gesturechange=2.5;2.4.onscroll=2.5;2.4.onmousewheel=2.5;2.g.s=2.t;d v=2.q;2.r=v;2.g.u=2.onZoom;2.h=a.b.w.c.x.h;2.j=a.b.w.c.x.j;k.h=2.h;k.j=2.j;d m=orc.utils.Util.getUrlParams();d n=0,y=m.length;while(n<y){d i=n++;d 3=m[i];6(3.7=="z")2.A=3.8;9 6(3.7=="o")2.o=3.8;9 6(3.7=="page")2.p=3.8;9 6(3.7=="pw")2.pageWidth=e.B(3.8);9 6(3.7=="ph")2.pageHeight=e.B(3.8);9 6(3.7=="f"){2.f=3.8;2.f=StringTools.urlDecode(2.f)}9 6(3.7=="C")2.C=3.8;9 6(3.7=="ua")2.D=3.8;9 6(3.7=="E")2.E=3.8}a.b.c.title=2.f+" - Page "+e.string(e.F(2.p)+1);2.z=new core.Html5Image(2.A,2.onLoadImage);k.useAnalyticsUA(2.D,2.o);k.logPageView(e.F(2.p)+1)}',
    [],
    42,
    "||Zoom|item|maskPopup|forbidden|if|key|value|else|js|Lib|document|var|Std|bookTitle|mask|clientWidth||clientHeight|RunTime|getElementById|params|_g1|bookId|pageNum|cvsZoomDom|cvsZoom|ondblclick|onDblClick|ontouchstart|dy|window|body|_g|img|imgSrc|parseFloat|bbv|analyticsUA|pcode|parseInt".split(
      "|"
    ),
    0,
    {}
  )
);
Zoom.forbidden = function (e) {
  e.stopPropagation();
};
Zoom.onLoadImage = function () {
  var w = Zoom.img.image.width;
  var h = Zoom.img.image.height;
  Zoom.cvsZoom.width =
    Math.max(Zoom.pageWidth, Math.max(w, Zoom.clientWidth)) | 0;
  Zoom.cvsZoom.height =
    Math.max(Zoom.pageHeight, Math.max(h, Zoom.clientHeight)) | 0;
  Zoom.mask.style.width = Std.string(Zoom.cvsZoom.width) + "px";
  Zoom.mask.style.height = Std.string(Zoom.cvsZoom.height) + "px";
  Zoom.xOffset =
    0.5 * (Zoom.cvsZoom.width - Math.max(Zoom.img.image.width, Zoom.pageWidth));
  Zoom.yOffset =
    0.5 *
    (Zoom.cvsZoom.height - Math.max(Zoom.img.image.height, Zoom.pageHeight));
  Zoom.xScale = w / Zoom.pageWidth;
  Zoom.yScale = h / Zoom.pageHeight;
  Zoom.draw();
  RunTime.requestHotlinks(Zoom.loadHotlinks);
  RunTime.requestButtons(Zoom.loadButtons);
  RunTime.requestVideos(Zoom.loadVideos);
};
Zoom.draw = function () {
  var ctx = Zoom.getContext();
  var dp = Zoom.getDrawParams();
  ctx.drawImage(
    Zoom.img.image,
    dp.sx,
    dp.sy,
    dp.sw,
    dp.sh,
    dp.dx,
    dp.dy,
    dp.dw,
    dp.dh
  );
};
Zoom.getDrawParams = function () {
  var dp = new core.DrawParams();
  dp.sx = 0;
  dp.sy = 0;
  dp.sw = Zoom.img.image.width;
  dp.sh = Zoom.img.image.height;
  dp.dx = Zoom.xOffset;
  dp.dy = Zoom.yOffset;
  dp.dw = Math.max(Zoom.pageWidth, dp.sw);
  dp.dh = Math.max(Zoom.pageHeight, dp.sh);
  return dp;
};
eval(
  (function (p, a, c, k, e, r) {
    e = String;
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "[1-8]";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    "1.loadHotlinks=function(){2 3=RunTime.book.6;2 4=0,7=3.length;while(4<7){2 i=4++;2 5=3[i];if(Std.string(5.8)==1.8)1.6.push(5)}1.renderHotlinks()}",
    [],
    9,
    "|Zoom|var|list|_g1|item|hotlinks|_g|pageNum".split("|"),
    0,
    {}
  )
);
Zoom.loadVideos = function () {
  var list = RunTime.book.videos;
  var _g1 = 0,
    _g = list.length;
  while (_g1 < _g) {
    var i = _g1++;
    var item = list[i];
    if (Std.string(item.pageNum) == Zoom.pageNum) Zoom.videos.push(item);
  }
  Zoom.renderVideos();
};
Zoom.loadButtons = function () {
  var list = RunTime.book.buttons;
  var _g1 = 0,
    _g = list.length;
  while (_g1 < _g) {
    var i = _g1++;
    var item = list[i];
    if (Std.string(item.pageNum) == Zoom.pageNum) Zoom.buttons.push(item);
  }
  Zoom.renderButtons();
};
Zoom.renderHotlinks = function () {
  var list = Zoom.hotlinks;
  var ctx = Zoom.getContext();
  var _g1 = 0,
    _g = list.length;
  while (_g1 < _g) {
    var i = _g1++;
    var item = list[i];
    Zoom.renderHotlink(ctx, item);
  }
};
Zoom.renderHotlink = function (ctx, link) {
  link.loadToRect(
    ctx,
    Zoom.xOffset + link.x * Zoom.xScale,
    Zoom.yOffset + link.y * Zoom.yScale,
    link.width * Zoom.xScale,
    link.height * Zoom.yScale
  );
};
Zoom.renderVideos = function () {
  var dom = js.Lib.document.getElementById("cvsVideo");
  var _g1 = 0,
    _g = Zoom.videos.length;
  while (_g1 < _g) {
    var i = _g1++;
    var item = Zoom.videos[i];
    item.x = item.x * Zoom.xScale;
    if (item.youtubeId == null || item.youtubeId == "")
      dom.innerHTML += core.HtmlHelper.toRectVideoHtml(
        item,
        Zoom.xOffset + item.x * Zoom.xScale,
        Zoom.yOffset + item.y * Zoom.yScale,
        item.width * Zoom.xScale,
        item.height * Zoom.yScale
      );
    else
      dom.innerHTML += core.HtmlHelper.toRectYoutubeVideoHtml(
        item,
        Zoom.xOffset + item.x * Zoom.xScale,
        Zoom.yOffset + item.y * Zoom.yScale,
        item.width * Zoom.xScale,
        item.height * Zoom.yScale
      );
  }
};
Zoom.renderButtons = function () {
  var list = Zoom.buttons;
  var ctx = Zoom.getContext();
  var _g1 = 0,
    _g = list.length;
  while (_g1 < _g) {
    var i = _g1++;
    var item = list[i];
    item.loadToContext2DRect(
      ctx,
      Zoom.xOffset + item.x * Zoom.xScale,
      Zoom.yOffset + item.y * Zoom.yScale,
      item.width * Zoom.xScale,
      item.height * Zoom.yScale
    );
  }
};
Zoom.onDblClick = function (e) {
  Zoom.zoomOut();
};
Zoom.onZoom = function (e) {
  var date = new Date();
  if (Zoom.lastTouchTime != null) {
    var lastTime = Zoom.lastTouchTime.getTime();
    var newTime = date.getTime();
    if (newTime - lastTime < RunTime.doubleClickIntervalMs) {
      Zoom.lastTouchTime = null;
      Zoom.zoomOut();
      return;
    }
  }
  Zoom.lastTouchTime = date;
  var obj = e;
  var touch = obj.touches[0];
  if (obj.touches.length > 1) Zoom.zoomOut();
  else Zoom.onClick(e);
};
Zoom.zoomOut = function (num) {
  if (num == null) num = -1;
  if (num == -1 || num == null) num = Std.parseInt(Zoom.pageNum);
  js.Lib.window.location.href =
    RunTime.urlIndex +
    "?page=" +
    Std.string(num) +
    "&bbv=" +
    Zoom.bbv +
    "&pcode=" +
    Zoom.pcode;
};
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return c.toString(36);
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "[1-9a-df-hj-r]";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    "1.onClick=function(e){2 f=j;2 g=1.hotlinks;2 k=e;2 a=k.touches[0];2 5=a.screenX;2 6=a.screenY;1.popupXOffset=5-a.clientX;1.popupYOffset=6-a.clientY;2 7=0,b=g.l;m(7<b){2 i=7++;2 3=g[i];n(5>=1.c+3.x*1.8&&5<=1.c+3.x*1.8+3.o*1.8&&6>=1.d+3.y*1.9&&6<=1.d+3.y*1.9+3.p*1.9){f=3;q}}1.invokeClickHotlink(f);2 h=j;2 7=0,b=1.r.l;m(7<b){2 i=7++;2 4=1.r[i];n(5>=1.c+4.x*1.8&&5<=1.c+4.x*1.8+4.o*1.8&&6>=1.d+4.y*1.9&&6<=1.d+4.y*1.9+4.p*1.9){h=4;q}}1.invokeClickButton(h)}",
    [],
    28,
    "|Zoom|var|link|button|xx|yy|_g1|xScale|yScale|touch|_g|xOffset|yOffset||match|list|matchButton||null|obj|length|while|if|width|height|break|buttons".split(
      "|"
    ),
    0,
    {}
  )
);
Zoom.invokeClickHotlink = function (link) {
  if (link == null) return;
  link.click(Zoom.popupXOffset, Zoom.popupYOffset);
};
Zoom.invokeClickButton = function (item) {
  if (item == null) return;
  item.click(Zoom.popupXOffset, Zoom.popupYOffset);
};
core.AudioInfo = function () {
  this.pageNum = -1;
  this.url = "";
  this.id = "";
};
core.AudioInfo.__name__ = true;
core.AudioInfo.prototype = { __class__: core.AudioInfo };
core.BookContext = function () {
  this.pages = new Array();
  this.pageOffset = 0;
  this.scale = 1;
  this.offsetX = 0;
  this.offsetY = 0;
};
core.BookContext.__name__ = true;
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < 62 ? "" : e(parseInt(c / 62))) +
        ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "[2-9a-hj-wzA-J]";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    "H.I.prototype={getNoteAt:g(x,y){7(2.l==6)a 6;4 5=0,8=2.l.b;c(5<8){4 i=5++;4 3=2.l[i];7(3.z(x,y)==m)a 3}a 6},getHighLightAt:g(x,y){7(2.n==6)a 6;4 5=0,8=2.n.b;c(5<8){4 i=5++;4 3=2.n[i];7(3.z(x,y)==m)a 3}a 6},getButtonAt:g(x,y){7(2.o==6)a 6;4 5=0,8=2.o.b;c(5<8){4 i=5++;4 3=2.o[i];7(3.z(x,y)==m)a 3}a 6},getHotLinkAt:g(x,y){7(2.p==6)a 6;4 5=0,8=2.p.b;c(5<8){4 i=5++;4 3=2.p[i];7(3.z(x,y)==m)a 3}a 6},render:g(){2.J();7(2.9!=6&&2.j!=6){4 5=0,8=2.9.b;c(5<8){4 i=5++;4 3=2.9[i];3.d=2.d;3.e=2.e;3.f=2.f;3.D=m;3.q(2.j)}}7(2.p!=6&&2.j!=6){4 5=0,8=2.p.b;c(5<8){4 i=5++;4 3=2.p[i];3.d=2.d;3.e=2.e;3.f=2.f;3.q(2.k)}}7(2.o!=6&&2.k!=6){4 5=0,8=2.o.b;c(5<8){4 i=5++;4 3=2.o[i];3.d=2.d;3.e=2.e;3.f=2.f;3.q(2.k)}}7(2.n!=6&&2.r!=6){4 5=0,8=2.n.b;c(5<8){4 i=5++;4 3=2.n[i];3.d=2.d;3.e=2.e;3.f=2.f;3.q(2.r)}}7(2.l!=6&&2.s!=6){4 5=0,8=2.l.b;c(5<8){4 i=5++;4 3=2.l[i];3.d=2.d;3.e=2.e;3.f=2.f;3.q(2.s)}}7(2.A!=6&&2.A.b>0){4 5=0,8=2.A.b;c(5<8){4 i=5++;4 3=2.A[i];3.q(2.t)}}},addPage:g(B){7(B==6)a;7(2.9==6)2.9=E F();B.bookContext=2;2.9.push(B)},J:g(C){7(C==6)C=G;7(2.9!=6){4 5=0,8=2.9.b;c(5<8){4 i=5++;4 3=2.9[i];3.D=G}}7(C==m)2.9=E F();7(2.j!=6)2.j.u(0,0,2.j.h.v,2.j.h.w);7(2.k!=6)2.k.u(0,0,2.k.h.v,2.k.h.w);7(2.r!=6)2.r.u(0,0,2.r.h.v,2.r.h.w);7(2.s!=6)2.s.u(0,0,2.s.h.v,2.s.h.w);7(2.t!=6)2.t.u(0,0,2.t.h.v,2.t.h.w)},removeAllPages:g(){7(2.9!=6){4 5=0,8=2.9.b;c(5<8){4 i=5++;4 3=2.9[i];3.D=G}}2.9=E F()},resetLayoutParams:g(){2.e=0;2.f=0;2.d=1},getPageCount:g(){a 2.9.b},__class__:H.I}",
    [],
    46,
    "||this|item|var|_g1|null|if|_g|pages|return|length|while|scale|offsetX|offsetY|function|canvas||ctx|ctxButton|notes|true|highlights|buttons|hotlinks|loadToContext2D|ctxHighLight|ctxNote|ctxBookmark|clearRect|width|height|||hitTest|bookmarks|page|removePages|visible|new|Array|false|core|BookContext|clear".split(
      "|"
    ),
    0,
    {}
  )
);
core.Bookmark = function () {
  this.onlyread = false;
  var _g = this;
  this.bookmarkImg = js.Lib.document.createElement("img");
  this.bookmarkImg.onload = function () {
    _g.bookImgLoaded = true;
  };
  this.bookmarkImg.src = RunTime.urlRoot + "content/images/bookmark.png";
};
core.Bookmark.__name__ = true;
core.Bookmark.prototype = {
  loadToContext2D: function (ctx) {
    if (ctx != null && this.bookImgLoaded) {
      ctx.save();
      ctx.drawImage(this.bookmarkImg, (RunTime.clientWidth | 0) - 40, 52);
      ctx.restore();
    }
  },
  clone: function () {
    var bookmark = new core.Bookmark();
    bookmark.guid = this.guid;
    bookmark.pageNum = this.pageNum;
    bookmark.text = this.text;
    return bookmark;
  },
  remove: function () {
    localStorage.removeItem(this.guid);
  },
  fillData: function (guid, json) {
    var objJSON = JSON.parse(json);
    this.pageNum = Std.parseInt(objJSON.obj[0].pageNum);
    this.text = objJSON.obj[0].text;
    this.guid = guid;
  },
  save: function () {
    this.guid = RunTime.kvPrex + "@$bm$@" + new Date().getTime();
    localStorage.setItem(this.guid, this.toJSONString());
  },
  toJSONString: function () {
    var json =
      '{"obj":[{"pageNum":"' + this.pageNum + '","text":"' + this.text + '"}]}';
    return json;
  },
  __class__: core.Bookmark,
};
core.ButtonInfo = function () {
  this.target = "_blank";
  this.window_color = "#333333";
  this.fontColor = "#ffffff";
  this.text = "";
  this.layer = "onpage";
  this.pageLayoutType = 0;
  this.scale = 1;
  this.offsetX = 0;
  this.offsetY = 0;
};
core.ButtonInfo.__name__ = true;
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < 62 ? "" : e(parseInt(c / 62))) +
        ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "([36-9a-gi-vzA-Z]|1\\w)";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    'A.L.prototype={click:m(B,C){8(C==9)C=0;8(B==9)B=0;switch(3.19){D"":8(3.f!=9){8(3.f.13("page:")==0){a 1a=1b.1c(3.f,5,9);a 14=Std.parseInt(1a);8(6.g!=9)6.g.turnToPage(14-1);b Zoom.zoomOut(14-1)}b 8(3.f.13("mailto:")==0){6.15(3.f);d.e.16.1d.1e=3.f}b 8(3.f.13("i:")==0){a i=1b.1c(3.f,4,9);8(i=="content")6.g.onContentsClick(9);b 8(i=="thumb")6.g.onThumbsClick(9);b 8(i=="showtxt")6.g.onShowTxtClick(9);b 8(i=="highlight")6.g.onButtonMaskClick(9);b 8(i=="bookmark")6.g.onButtonBookmark(9);b 8(i=="notes")6.g.onButtonNoteClick(9);b 8(i=="autoflip")6.g.onAutoFlipClick(9);b 8(i=="download")6.onDownloadClick(9);b 8(i=="fliptofront")6.g.turnToFirstPage(9);b 8(i=="flipleft")6.g.turnToPrevPage(9);b 8(i=="flipright")6.g.turnToNextPage(9);b 8(i=="fliptoback")6.g.turnToLastPage(9)}b{6.15(3.f);8("_self"==3.1f)d.e.16.1d.1e=3.f;b d.e.16.open(3.f,3.1f)}}E;D"1g":6.M();6.N(d.e.j.k("q"),B,C);A.O.toPopupImageHtml(3,m(1h){d.e.j.k("q").P=1h;d.e.j.k("popupImage").Q.R+=" -r-s: n(1);-r-t:o  2s u-v;-z-s: n(1); -z-t: 0.S u-v; "});6.15(3.f);E;D"video":6.M();6.N(d.e.j.k("q"),B,C);d.e.j.k("q").P=A.O.toPopupVideoHtml(3);d.e.j.k("popupVideo").Q.R+=" -r-s: n(1);-r-t:o  2s u-v; -z-s: n(1);-z-t: 0.S u-v; ";6.playVideo();6.logVideoView(3.f,3.youtubeId);E;D"audio":6.g.showPopupAudio(3);6.logAudioView(3.f);6.playAudio();E;D"1i":6.M();6.N(d.e.j.k("q"),B,C);d.e.j.k("q").P=A.O.1j(3);d.e.j.k("1k").Q.R+=" -r-s: n(1);-r-t:o  2s u-v; -z-s: n(1);-z-t: 0.S u-v; ";E;D"1i-hover":6.M();6.N(d.e.j.k("q"),B,C);d.e.j.k("q").P=A.O.1j(3);d.e.j.k("1k").Q.R+="-r-s: n(1); -r-t:o 2s u-v; -z-s: n(1); -z-t: 0.S u-v; ";E}},1l:m(F,G){8(3.19=="none")H false;a 7=3.T();a I=7.dx+(3.x-7.sx)*(7.U/7.V);a J=7.dy+(3.y-7.sy)*(7.W/7.X);a Y=3.o*(7.U/7.V);a Z=3.K*(7.W/7.X);haxe.Log.trace("F="+F+",G="+G,{fileName:"L.hx",lineNumber:153,className:"A.L",methodName:"1l"});a 1q=F>=I&&G>=J&&F<=I+Y&&G<=J+Z;H 1q},17:m(c,x,y,w,h){8(w>0&&h>0){8(3.1r=="")c.drawImage(3.p,0,0,3.p.o,3.p.K,x,y,w,h);b{c.save();c.fillStyle=3.fontColor;c.font=3.fontSize+"px "+3.fontName;c.fillText(3.1r,x,y+30);c.restore()}}},1s:m(c,x,y,w,h){3.c=c;8(3.p==9){a l=3;3.18(m(){l.10=11;l.1s(l.c,l.x,l.y,l.o,l.K)})}8(3.10==11)3.17(c,x,y,3.o,3.K)},1t:m(c){3.c=c;8(3.p==9){a l=3;3.18(m(){l.10=11;l.1t(l.c)})}8(3.10==11){a 7=3.T();a I=7.dx+(3.x-7.sx)*(7.U/7.V);a J=7.dy+(3.y-7.sy)*(7.W/7.X);a Y=3.o*(7.U/7.V);a Z=3.K*(7.W/7.X);3.17(c,I,J,Y,Z)}},18:m(1u){8(3.p!=9)H 3.p;a 12=new Image();12.src=3.1g;12.onload=1u;3.p=12;H 3.p},T:m(){a 7=6.T(3.1v);8(3.1v==2)7=6.getGolobaDrawParams();7.applyTransform(3.n,3.offsetX,3.offsetY);H 7},__class__:A.L}',
    [],
    94,
    "|||this|||RunTime|dp|if|null|var|else|ctx|js|Lib|destination|flipBook||fun|document|getElementById|self|function|scale|width|_imagePage|cvsOthers|moz|transform|transition|ease|out||||webkit|core|popupXOffset|popupYOffset|case|break|mouseX|mouseY|return|xx|yy|height|ButtonInfo|showPopupMaskLayer|setOffset|HtmlHelper|innerHTML|style|cssText|5s|getDrawParams|dw|sw|dh|sh|ww|hh|loaded|true|img|indexOf|num|logClickLink|window|loadToRect|getImagePage|type|val|HxOverrides|substr|location|href|target|image|txt|message|toPopupHtml|popupMessage|hitTest|||||result|text|loadToContext2DRect|loadToContext2D|onloadFunc|pageLayoutType".split(
      "|"
    ),
    0,
    {}
  )
);
core.DrawParams = function () {};
core.DrawParams.__name__ = true;
core.DrawParams.prototype = {
  sliceRight: function (ratio, xOffset) {
    if (xOffset == null) xOffset = 0;
    if (ratio < 0) ratio = 0;
    else if (ratio > 1) ratio = 1;
    var dp = new core.DrawParams();
    dp.sx = this.sx + this.sw * (1 - ratio);
    dp.sy = this.sy;
    dp.dx = this.dx + this.dw * (1 - ratio) + xOffset;
    dp.dy = this.dy;
    dp.sw = this.sw * ratio;
    dp.sh = this.sh;
    dp.dw = this.dw * ratio;
    dp.dh = this.dh;
    return dp;
  },
  sliceLeft: function (ratio, xOffset) {
    if (xOffset == null) xOffset = 0;
    if (ratio < 0) ratio = 0;
    else if (ratio > 1) ratio = 1;
    var dp = new core.DrawParams();
    dp.sx = this.sx;
    dp.sy = this.sy;
    dp.dx = this.dx + xOffset;
    dp.dy = this.dy;
    dp.sw = this.sw * ratio;
    dp.sh = this.sh;
    dp.dw = this.dw * ratio;
    dp.dh = this.dh;
    haxe.Log.trace("x: " + dp.dw + " y:" + dp.dh, {
      fileName: "DrawParams.hx",
      lineNumber: 127,
      className: "core.DrawParams",
      methodName: "sliceLeft",
    });
    return dp;
  },
  toString2: function () {
    return (
      "x: " +
      Std.string(this.sx | 0) +
      ", y:" +
      Std.string(this.sy | 0) +
      ", w:" +
      Std.string(this.sw | 0) +
      ", h:" +
      Std.string(this.sh | 0) +
      ", x2:" +
      Std.string(this.dx | 0) +
      ", y2:" +
      Std.string(this.dy | 0) +
      ", w2:" +
      Std.string(this.dw | 0) +
      ", h2:" +
      Std.string(this.dh | 0)
    );
  },
  toString: function () {
    return (
      Std.string(this.sx) +
      "," +
      Std.string(this.sy) +
      "," +
      Std.string(this.sw) +
      "," +
      Std.string(this.sh) +
      "," +
      Std.string(this.dx) +
      "," +
      Std.string(this.dy) +
      "," +
      Std.string(this.dw) +
      "," +
      Std.string(this.dh)
    );
  },
  applyTransform: function (scale, offsetX, offsetY) {
    this.dx = this.dx * scale + offsetX;
    this.dy = this.dy * scale + offsetY;
    this.dw = this.dw * scale;
    this.dh = this.dh * scale;
  },
  clone: function () {
    var dw = new core.DrawParams();
    dw.sx = this.sx;
    dw.sy = this.sy;
    dw.sw = this.sw;
    dw.sh = this.sh;
    dw.dx = this.dx;
    dw.dy = this.dy;
    dw.dw = this.dw;
    dw.dh = this.dh;
    return dw;
  },
  scaleY: function () {
    return this.dh / this.sh;
  },
  scaleX: function () {
    return this.dw / this.sw;
  },
  dhi: function () {
    return Math.round(this.dh);
  },
  dwi: function () {
    return Math.round(this.dw);
  },
  dyi: function () {
    return Math.round(this.dy);
  },
  dxi: function () {
    return Math.round(this.dx);
  },
  __class__: core.DrawParams,
};
core.HighLight = function () {
  this.note = new core.Note();
  this.x = 0;
  this.y = 0;
  this.width = 0;
  this.height = 0;
  this.pageNum = -1;
  this.guid = "";
  this.color = "";
  this.checked = false;
  this.pageLayoutType = 0;
  this.scale = 1;
  this.offsetX = 0;
  this.offsetY = 0;
};
core.HighLight.__name__ = true;
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < 62 ? "" : e(parseInt(c / 62))) +
        ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "([36-9a-wzA-Z]|1\\w)";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    't.u.prototype={click:7(D,E){c(E==v)E=0;c(D==v)D=0;g.showPopupMaskLayer();g.setOffset(K.L.M.N("19"),D,E);K.L.M.N("19").innerHTML=t.HtmlHelper.toHighLightPopupHtml(3,"saveHighlightNote","deleteHighlightNote");K.L.M.N("textNote").focus()},hitTest:7(O,P){8 6=3.l();8 w=6.Q+(3.x-6.R)*(6.n/6.o);8 z=6.S+(3.y-6.T)*(6.p/6.q);8 F=3.d*(6.n/6.o);8 G=3.a*(6.p/6.q);8 1a=O>=w&&P>=z&&O<=w+F&&P<=z+G;e 1a},U:7(f){8 1b=5;f.V();3.b="W(1c,0,0,0.4)";f.X=3.b;f.1d(3.A|0,3.Y|0,3.Z|0,3.10|0);f.1e();c(3.9!=v){3.9.x=3.A;3.9.y=3.Y-3.9.1f.a;3.9.U()}},loadToContext2D:7(f){8 1b=5;f.V();c(3.b!="")f.X=3.b;r f.X="W(0,1c,0,0.4)";8 6=3.l();8 w=6.Q+(3.x-6.R)*(6.n/6.o);8 z=6.S+(3.y-6.T)*(6.p/6.q);8 F=3.d*(6.n/6.o);8 G=3.a*(6.p/6.q);f.1d(w|0,z|0,F|0,G|0);f.1e();c(3.9!=v){3.9.x=3.x;3.9.y=3.y-3.9.1f.a;3.9.U()}},remove:7(){11.removeItem(3.i)},updateText:7(m,b){3.9.m=m;3.b="W("+b+",0.4)";11.1g(3.i,3.12())},setChecked:7(1h){3.1i=1h;c(3.1i){}r{}},fillData:7(i,H){8 j=JSON.parse(H);3.x=s.I(j.k[0].x);3.y=s.I(j.k[0].y);3.d=s.I(j.k[0].d);3.a=s.I(j.k[0].a);3.9.m=j.k[0].9;3.B=s.parseInt(j.k[0].1j);3.b=s.string(j.k[0].b);3.i=i},J:7(){8 6=3.l();3.B=3.tpageNum;c(g.singlePage){}r c(g.book.rightToLeft){c(3.A>g.1k/2)6=3.13();r 6=3.14()}r c(3.A>g.1k/2)6=3.14();r 6=3.13();3.x=6.R+(3.A-6.Q)/(6.n/6.o);3.y=6.T+(3.Y-6.S)/(6.p/6.q);3.d=3.Z/(6.n/6.o);3.a=3.10/(6.p/6.q);haxe.Log.trace("x="+3.x+",y="+3.y+",d="+3.d+",a="+3.a,{fileName:"u.hx",lineNumber:208,className:"t.u",methodName:"J"})},V:7(){c(3.Z==0||3.10==0)e;3.i=g.kvPrex+"@$ht$@"+1l Date().getTime();3.J();11.1g(3.i,3.12())},12:7(){8 H="{\\"k\\":[{\\"x\\":\\""+3.x+"\\",\\"y\\":\\""+3.y+"\\",\\"d\\":\\""+3.d+"\\",\\"a\\":\\""+3.a+"\\",\\"1j\\":\\""+3.B+"\\",\\"b\\":\\""+3.b+"\\",\\"9\\":\\""+3.9.m+"\\"}]}";e H},getBottom:7(){e 3.y+3.a},getTop:7(){e 3.y},getRight:7(){e 3.x+3.d},getLeft:7(){e 3.x},1m:7(){e 3.C.1m("2d")},1n:7(C){3.C=C;c(3.9!=v)3.9.1n(3.C)},clone:7(){3.J();8 h=1l t.u();h.x=3.x;h.y=3.y;h.d=3.d;h.a=3.a;h.B=3.B;h.i=3.i;h.b=3.b;h.9.m=3.9.m;e h},14:7(){8 6=g.l(1);6.15(3.16,3.17,3.18);e 6},13:7(){8 6=g.l(-1);6.15(3.16,3.17,3.18);e 6},l:7(){8 6=g.l(3.pageLayoutType);6.15(3.16,3.17,3.18);e 6},__class__:t.u}',
    [],
    86,
    "|||this|||dp|function|var|note|height|color|if|width|return|context|RunTime|hl|guid|objJSON|obj|getDrawParams|text|dw|sw|dh|sh|else|Std|core|HighLight|null|xx|||yy|tx|pageNum|canvas|popupXOffset|popupYOffset|ww|hh|json|parseFloat|DataTransform|js|Lib|document|getElementById|mouseX|mouseY|dx|sx|dy|sy|draw|save|rgba|fillStyle|ty|twidth|theight|localStorage|toJSONString|getLeftDrawParams|getRightDrawParams|applyTransform|scale|offsetX|offsetY|cvsOthers|result|radius|255|fillRect|restore|image|setItem|bChecked|checked|page|clientWidth|new|getContext|setCanvas".split(
      "|"
    ),
    0,
    {}
  )
);
core.HotLink = function () {
  this.target = "_blank";
  this.window_color = "#333333";
  this.opacity = 0.8;
  this.pageLayoutType = 0;
  this.scale = 1;
  this.offsetX = 0;
  this.offsetY = 0;
  this.tt = 0;
};
core.HotLink.__name__ = true;
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < 62 ? "" : e(parseInt(c / 62))) +
        ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "([236-9a-gi-vzA-Z]|1\\w)";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    'v.Y.prototype={click:z(t,u){7(u==8)u=0;7(t==8)t=0;switch(2.type){A"":7(2.d!=8){7(2.d.S("page:")==0){a Z=10.11(2.d,5,8);a T=Std.parseInt(Z);7(3.e!=8)3.e.turnToPage(T-1);9 Zoom.zoomOut(T-1)}9 7(2.d.S("mailto:")==0){3.U(2.d);b.c.V.12.13=2.d}9 7(2.d.S("f:")==0){a f=10.11(2.d,4,8);7(f=="content")3.e.onContentsClick(8);9 7(f=="thumb")3.e.onThumbsClick(8);9 7(f=="showtxt")3.e.onShowTxtClick(8);9 7(f=="highlight")3.e.onButtonMaskClick(8);9 7(f=="bookmark")3.e.onButtonBookmark(8);9 7(f=="notes")3.e.onButtonNoteClick(8);9 7(f=="autoflip")3.e.onAutoFlipClick(8);9 7(f=="download")3.onDownloadClick(8);9 7(f=="fliptofront")3.e.turnToFirstPage(8);9 7(f=="flipleft")3.e.turnToPrevPage(8);9 7(f=="flipright")3.e.turnToNextPage(8);9 7(f=="fliptoback")3.e.turnToLastPage(8)}9{3.U(2.d);7("_self"==2.14)b.c.V.12.13=2.d;9 b.c.V.open(2.d,2.14)}}B;A"image":3.F();3.G(b.c.g.i("k"),t,u);v.H.toPopupImageHtml(2,z(15){b.c.g.i("k").I=15;b.c.g.i("popupImage").J.K+="-l-m: j(1);-l-n: C 0.o p-q;  -r-m: j(1); -r-n: 0.o p-q; "});3.U(2.d);B;A"video":3.F();3.G(b.c.g.i("k"),t,u);b.c.g.i("k").I=v.H.toPopupVideoHtml(2);b.c.g.i("popupVideo").J.K+="-l-m: j(1);-l-n: C 0.o p-q; -r-m: j(1); -r-n: 0.o p-q; ";3.playVideo();3.logVideoView(2.d,2.youtubeId);B;A"audio":3.e.showPopupAudio(2);3.logAudioView(2.d);3.playAudio();B;A"16":3.F();3.G(b.c.g.i("k"),t,u);b.c.g.i("k").I=v.H.17(2);b.c.g.i("18").J.K+=" -l-m: j(1);-l-n: C 0.o p-q; -r-m: j(1); -r-n: 0.o p-q; ";B;A"16-hover":3.F();3.G(b.c.g.i("k"),t,u);b.c.g.i("k").I=v.H.17(2);b.c.g.i("18").J.K+=" -l-m: j(1);-l-n:C  0.o p-q; -r-m: j(1); -r-n: 0.o p-q; ";B}},hitTest:z(W,X){a 6=2.L();a D=6.dx+(2.x-6.sx)*(6.M/6.N);a E=6.dy+(2.y-6.sy)*(6.O/6.P);a Q=2.C*(6.M/6.N);a R=2.1d*(6.O/6.P);a 1e=W>=D&&X>=E&&W<=D+Q&&X<=E+R;1f 1e},loadToContext2D:z(s){a 6=2.L();a D=6.dx+(2.x-6.sx)*(6.M/6.N);a E=6.dy+(2.y-6.sy)*(6.O/6.P);a Q=2.C*(6.M/6.N);a R=2.1d*(6.O/6.P);2.1g(s,D,E,Q,R)},1g:z(s,x,y,w,h){7(2.tt==1){7(w>0&&h>0){s.font=2.fontSize+"px "+2.fontName;s.1h=2.1i;s.fillText(2.text,x,y+30)}}9{7(w>0&&h>0){s.1h=orc.utils.DrawHelper.createFillStyle(2.1i,2.opacity);s.fillRect(x|0,y|0,w|0,h|0)}}},L:z(){a 6=3.L(2.pageLayoutType);6.applyTransform(2.j,2.offsetX,2.offsetY);1f 6},__class__:v.Y}',
    [],
    81,
    "||this|RunTime|||dp|if|null|else|var|js|Lib|destination|flipBook|fun|document||getElementById|scale|cvsOthers|moz|transform|transition|5s|ease|out|webkit|ctx|popupXOffset|popupYOffset|core||||function|case|break|width|xx|yy|showPopupMaskLayer|setOffset|HtmlHelper|innerHTML|style|cssText|getDrawParams|dw|sw|dh|sh|ww|hh|indexOf|num|logClickLink|window|mouseX|mouseY|HotLink|val|HxOverrides|substr|location|href|target|txt|message|toPopupHtml|popupMessage|||||height|result|return|loadToRect|fillStyle|color".split(
      "|"
    ),
    0,
    {}
  )
);
core.Html5Image = function (url, onLoad) {
  this.url = url;
  this.onload = onLoad;
  this.image = new Image();
  this.image.onload = this.onload;
  this.image.src = url;
};
core.Html5Image.__name__ = true;
core.Html5Image.prototype = { __class__: core.Html5Image };
core.HtmlHelper = function () {};
core.HtmlHelper.__name__ = true;
core.HtmlHelper.toContentsHtml = function (xml) {
  var roots = orc.utils.Util.getXmlChilds(xml);
  if (roots.length != 1) return "";
  var root = roots[0];
  var childs = orc.utils.Util.getXmlChilds(root);
  var s = "";
  if (childs.length > 0) {
    var _g1 = 0,
      _g = childs.length;
    while (_g1 < _g) {
      var i = _g1++;
      s += core.HtmlHelper.toContentsNodeHtml(childs[i]);
    }
  }
  return s;
};
core.HtmlHelper.toContentsNodeHtml = function (xml) {
  var childs = orc.utils.Util.getXmlChilds(xml);
  var s = "";
  s += "<ul>";
  s += "<li>";
  s += core.HtmlHelper.toContentsNodeHtmlCore(xml);
  s += "</li>";
  if (childs.length > 0) {
    s += "<ul>";
    var _g1 = 0,
      _g = childs.length;
    while (_g1 < _g) {
      var i = _g1++;
      s += core.HtmlHelper.toContentsNodeHtml(childs[i]);
    }
    s += "</ul>";
  }
  s += "</ul>";
  return s;
};
core.HtmlHelper.toContentsNodeHtmlCore = function (xml) {
  var title = xml.get("title");
  var page = xml.get("page");
  var pageVal = 0;
  if (page != null && page != "") {
    pageVal = Std.parseInt(page);
    page = Std.string(pageVal - 1);
  }
  return '<span onclick="gotoPage(' + page + ');">' + title + "</span>";
};
core.HtmlHelper.toSnsHtml = function (xml) {
  var roots = orc.utils.Util.getXmlChilds(xml);
  if (roots.length != 1) return "";
  var root = roots[0];
  var childs = orc.utils.Util.getXmlChilds(root);
  var s = "";
  s += "<div id='snsbox' style='float:left;width: 100%;height: 250px;'>";
  if (childs.length > 0) {
    var _g1 = 0,
      _g = childs.length;
    while (_g1 < _g) {
      var i = _g1++;
      s += core.HtmlHelper.toSnsNodeHtml(childs[i]);
    }
  }
  s += "</div>";
  return s;
};
core.HtmlHelper.toSnsNodeHtml = function (xml) {
  var s = "<p style='float:left;width:150px;height:20px;'>";
  s +=
    "<a href='" +
    xml.get("href") +
    "'><img style='vertical-align:middle;' src='" +
    xml.get("logoUrl") +
    "'></a>";
  s +=
    "<span onclick=\"RunTime.navigateUrl('" +
    xml.get("href") +
    "')\" style='vertical-align:middle;'>" +
    xml.get("name") +
    "</span>";
  s += "</p>";
  return s;
};
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < 62 ? "" : e(parseInt(c / 62))) +
        ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "[2-9b-rt-zA-K]";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    'core.HtmlHelper.toAboutHtml=function(p,q){2 g=r.t.u.v(p);3(g.w!=1)h"";2 i=g[0];2 j=r.t.u.v(q);3(j.w!=1)h"";2 5=j[0];2 k=i.6("logo");2 x=i.firstChild().getNodeValue();2 l=5.6("title");2 m=5.6("author");2 9=5.6("9");2 b=5.6("b");2 c=5.6("c");2 n=5.6("email");2 o=5.6("tel");2 y=L.s("BookTitle","z Title");2 A=L.s("BookAuthor","z Author");2 B=L.s("CompanyName","C Name");2 D=L.s("CompanyUrl","C Url");2 E=L.s("CompanyAddress","Address");2 F=L.s("CompanyEmail","Email");2 G=L.s("CompanyTel","Tel");2 4="";3(l!="")4+=y+":"+l+"<8 />";3(m!="")4+=A+":"+m+"<8 />";3(9!="")4+=B+":"+9+"<8 />";3(b!="")4+=D+":"+b+"<8 />";3(c!="")4+=E+":"+c+"<8 />";3(n!="")4+=F+":"+n+"<8 />";3(o!="")4+=G+":"+o+"<8 />";2 s="";s+="<7 d=\'e:H%; f:280px;\'>";s+="<7 d=\'e:30%; f:I; J:K;\'>";3(k!="")s+="<img src=\'"+k+"\'/>";s+="</7>";s+="<7 d=\'e:65%; f:I; J:K;\'>"+4+"</a></7>";s+="<7 d=\'e:H%; f:110px;\'>"+x+"</7>";s+="</7>";h s}',
    [],
    47,
    "||var|if|aboutUsText|bookinfoRoot|get|div|br|companyName||companyUrl|companyAddress|style|width|height|aboutRoots|return|aboutRoot|bookinfoRoots|logoUrl|bookTitle|bookAuthor|companyEmail|companyTel|aboutXml|bookinfoXml|orc||utils|Util|getXmlChilds|length|text|l_bookTitle|Book|l_bookAuthor|l_companyName|Company|l_companyUrl|l_companyAddress|l_companyEmail|l_companyTel|100|160px|float|left".split(
      "|"
    ),
    0,
    {}
  )
);
core.HtmlHelper.toEmailHtml = function () {
  var s = "";
  s +=
    "<form  id='sendEmail' action='" +
    RunTime.book.gateway +
    "' method='post'>";
  s += "<table border='none' class='email'>";
  s +=
    "<tr><td>" +
    L.s("To", "To") +
    ":</td><td><input  id='tomail' type='text' name='tomail' /></td></tr>";
  s +=
    "<tr><td>" +
    L.s("YourName", "Your Name") +
    ":</td><td><input id='yname' type='text' name='yourName'/></td></tr>";
  s +=
    "<tr><td>" +
    L.s("YourEmail", "Your Email") +
    ":</td><td><input id='youremail' type='text' name='frommail'/></td></tr>";
  s +=
    "<tr><td>" +
    L.s("Message", "Message") +
    ":</td><td><textarea rows='7' cols='30' id='sharemsg' name='message'></textarea></td></tr>";
  s +=
    "<tr><td></td><td align='right'><input style='width:100px' type='button' onclick='RunTime.onSendEmail();' value='" +
    L.s("Send", "Send") +
    "'/></td></tr>";
  s += "</table>";
  s +=
    "<input style='display:none' type='hide' id='subject' name='subject' value='" +
    L.s("YourFriend", "YourFirend") +
    L.s("ShareEmailTitle", "ShareEmailTitle") +
    "'/>";
  s += "</form>";
  return s;
};
core.HtmlHelper.toThumbsHtml = function (pages) {
  var s = "";
  var _g1 = 0,
    _g = pages.length;
  while (_g1 < _g) {
    var i = _g1++;
    var page = pages[i];
    s += core.HtmlHelper.toThumbsNodeHtml(page);
  }
  return s;
};
core.HtmlHelper.toThumbsNodeHtml = function (page) {
  return (
    '<img class="thumb" src="' +
    page.urlThumb +
    '" onclick="gotoPage(' +
    page.num +
    '); " />'
  );
};
core.HtmlHelper.toBookmarksHtml = function (
  bookmarks,
  singleMode,
  lbEnable,
  rbEnable
) {
  var s = "";
  s += '<div id="op">';
  s += '<textarea id="bookmarknote"></textarea>';
  if (singleMode) s += '<button onclick="addBookmark(0)">Add Bookmark</button>';
  else {
    if (lbEnable)
      s += '<button onclick="addBookmark(-1)">Add Left Bookmark</button>';
    else s += '<button disabled="disabled">Add Left Bookmark</button>';
    if (rbEnable)
      s += '<button onclick="addBookmark(1)">Add Right Bookmark</button>';
    else s += '<button disabled="disabled">Add Right Bookmark</button>';
  }
  s += "<button>Remove All</button>";
  s += "</div>";
  s +=
    '<ul style="margin:20px 0px 0px 0px;padding-left:5px;padding-right:5px;">';
  if (bookmarks != null) {
    var _g1 = 0,
      _g = bookmarks.length;
    while (_g1 < _g) {
      var i = _g1++;
      var bookmark = bookmarks[i];
      s += core.HtmlHelper.toBookmarkNodeHtml(bookmark);
    }
  }
  s += "</ul>";
  return s;
};
core.HtmlHelper.toBookmarkNodeHtml = function (bookmark) {
  var s = "";
  s += '<li class="bookmarkrow" >';
  s +=
    '<p class="p1" onclick="gotoPage(' +
    Std.string(bookmark.pageNum - 1) +
    ')" > P' +
    bookmark.pageNum +
    "</p>";
  s +=
    '<p class="p2" onclick="gotoPage(' +
    Std.string(bookmark.pageNum - 1) +
    ')">' +
    bookmark.text +
    "</p>";
  s +=
    '<button onclick="removeBookmark(' +
    Std.string(bookmark.pageNum - 1) +
    ')" style="float:right;margin:0px -2px;">' +
    L.s("RemoveBookmark", "Remove") +
    "</button>";
  s += "</li>";
  return s;
};
core.HtmlHelper.toSearchHtml = function () {
  return StringTools.replace(RunTime.searchHtmlCache, "$Search", L.s("Search"));
};
core.HtmlHelper.toSearchResultHtml = function (results) {
  var s = "";
  s += "<table>";
  var _g1 = 0,
    _g = results.length;
  while (_g1 < _g) {
    var i = _g1++;
    var item = results[i];
    s += '<tr onclick="gotoPage(' + Std.string(item.page - 1) + ')">';
    s += '<td width="40px" class="colPage">';
    s += "P" + Std.string(item.page);
    s += "</td>";
    s += '<td class="colContent">';
    s += item.content;
    s += "</td>";
    s += "</tr>";
  }
  s += "</table>";
  return s;
};
core.HtmlHelper.toVideoHtml = function (video) {
  return video.toHtml();
};
core.HtmlHelper.toRectVideoHtml = function (video, xx, yy, ww, hh) {
  var loop = video.autoRepeat ? "loop" : "";
  var s = "";
  s +=
    '<div id="' +
    video.id +
    '" style="position:absolute;z-index:101;left:' +
    Std.string(Math.round(xx)) +
    "px;top:" +
    Std.string(Math.round(yy)) +
    "px;width:" +
    Std.string(Math.round(ww)) +
    "px;height:" +
    Std.string(Math.round(hh)) +
    'px;">';
  s +=
    '<video class="video-js" src="' +
    video.url +
    '" width="' +
    Std.string(Math.round(ww)) +
    '" height="' +
    Std.string(Math.round(hh)) +
    '" controls autoplay preload onloadeddata=\'RunTime.logVideoView("' +
    video.url +
    '", "' +
    video.youtubeId +
    "\")' " +
    loop +
    " >";
  s += "</video>";
  s += "</div>";
  return s;
};
core.HtmlHelper.toRectYoutubeVideoHtml = function (video, xx, yy, ww, hh) {
  var s = "";
  s +=
    '<div id="' +
    video.id +
    '" style="position:absolute;z-index:101;left:' +
    Std.string(Math.round(xx)) +
    "px;top:" +
    Std.string(Math.round(yy)) +
    'px;width:1px;height:1px;">';
  s +=
    '<iframe frameborder="0" type="text/html"" width="' +
    Std.string(Math.round(ww)) +
    '" height="' +
    Std.string(Math.round(hh)) +
    '" src="http://www.youtube.com/embed/' +
    video.youtubeId +
    '?controls=1&amp;antoplay=1&amp;enablejsapi=1">';
  s += "</iframe>";
  s += "</div>";
  return s;
};
core.HtmlHelper.toSlideshow = function (slideshow) {
  return slideshow.toHtml();
};
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < 62 ? "" : e(parseInt(c / 62))) +
        ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "[2-9a-hj-rt-yA-N]";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    'core.HtmlHelper.toSlideShowHtml=function(2,o,p,g,h,v){d s="";w(2.x=="move"){s+="<4 j=\\"3\\" a=\\"q:r;z-y:A;t:"+5.6(7.8(o))+"9;B:"+5.6(7.8(p))+"9;e:"+5.6(7.8(g))+"9;C:"+5.6(7.8(h))+"9;\\">";s+="<4  a=\\"e: k%;D: E;\\">";s+="<4 j=\\"F\\" b=\\"G"+2.b+"\\" a=\\"e:"+2.3.c*k+"%;\\">";d f=0,l=2.3.c;H(f<l){d i=f++;s+="<m a=\\"e:"+1/2.3.c*k+"%;\\">";s+="<I J=\\""+2.3[i].K+"\\" L=\\"u.M(\'"+2.3[i].N+"\');\\">";s+="</m>"}s+="</4>";s+="</4>";s+="</4>"}else w(2.x=="fade"){s+="<4 j=\\"3\\" a=\\"q:r;z-y:A;t:"+5.6(7.8(o))+"9;B:"+5.6(7.8(p))+"9;e:"+5.6(7.8(g))+"9;C:"+5.6(7.8(h))+"9;\\">";s+="<4 j=\\"F\\" b=\\"G"+2.b+"\\" >";d f=0,l=2.3.c;H(f<l){d i=f++;d n=2.b+"_"+(2.3.c-i);s+="<m a=\\"text-align:t;e:k%;D: E;background:"+2.bgColor+";q:r;\\" b=\\"a_"+n+"\\">";s+="<I b=\\""+n+"\\" J=\\""+2.3[2.3.c-i-1].K+"\\" L=\\"u.M(\'"+2.3[2.3.c-i-1].N+"\');\\"  a=\\"\\" onload=\\"u.resizeSlide(this,"+(g|0)+","+(h|0)+",\'"+n+"\',"+v+");\\">";s+="</m>"}s+="</4>";s+="</4>"}return s}',
    [],
    50,
    "||slideshow|slides|div|Std|string|Math|round|px|style|id|length|var|width|_g1|ww|hh||class|100|_g|article|sid|xx|yy|position|absolute||left|RunTime|scale|if|transition|index||108|top|height|overflow|hidden|inner|p_|while|img|src|url|onclick|navigateUrl|href".split(
      "|"
    ),
    0,
    {}
  )
);
core.HtmlHelper.toPopupImageHtml = function (item, success) {
  var w = (RunTime.clientWidth * 0.9) | 0;
  var h = (RunTime.clientHeight * 0.9) | 0;
  if (item.popupWidth != null && item.popupHeight != null) {
    w = item.popupWidth;
    h = item.popupHeight;
  } else {
    var img = null;
    var onload = function () {
      item.popupWidth = img.image.width;
      item.popupHeight = img.image.height;
      core.HtmlHelper.toPopupImageHtml(item, success);
    };
    img = new core.Html5Image(item.destination, onload);
    return;
  }
  var helper = new orc.utils.ImageMetricHelper(w, h);
  var scale = helper.getMaxFitScale(
    RunTime.clientWidth * 0.9,
    RunTime.clientHeight * 0.9
  );
  h = (h * scale) | 0;
  w = (w * scale) | 0;
  var left = ((RunTime.clientWidth - w) / 2) | 0;
  var top = ((RunTime.clientHeight - h) / 2) | 0;
  var s = "";
  if (item.popupWidth != null && item.popupHeight != null) {
    s = "";
    s +=
      '<div id="popupImage" style="position:absolute; z-index:200;left:' +
      Std.string(left) +
      "px; top:" +
      Std.string(top) +
      "px; width:" +
      Std.string(w) +
      "px; height:" +
      Std.string(h) +
      'px; background-color:#ffffff; -moz-transform: scale(0.2);-moz-transition: width 0s ease-out;-webkit-transform: scale(0.2); -webkit-transition: 0s ease-out; " >';
    s +=
      '<img src="' +
      Std.string(item.destination) +
      '" style="width:' +
      Std.string(w) +
      "px;height:" +
      Std.string(h) +
      'px;" />';
    s +=
      '<img width="24" height="24" src="content/images/close.png" onclick="clearPopupContents();" style="position:absolute;right:-12px;top:-12px;" />';
    s += "</div>";
  } else {
    s = "";
    s +=
      '<div style="position:absolute;z-index:200; left:' +
      Std.string(left) +
      "px; top:" +
      Std.string(top) +
      "px; width:" +
      Std.string(w) +
      "px; height:" +
      Std.string(h) +
      'px; ">';
    s += '<div style="margin:0 auto; ">';
    s +=
      '<img src="' +
      Std.string(item.destination) +
      '" style="max-width:' +
      Std.string(w) +
      "px;max-height:" +
      Std.string(h) +
      'px;" />';
    s +=
      '<img width="24" height="24" src="content/images/close.png" onclick="clearPopupContents();" style="position:absolute;right:-12px;top:-12px;" />';
    s += "</div>";
    s += "</div>";
  }
  if (success != null) success(s);
};
core.HtmlHelper.toPopupVideoHtml = function (item) {
  var w = 600;
  var h = 480;
  if (item.popupWidth != null && item.popupHeight != null) {
    w = item.popupWidth;
    h = item.popupHeight;
  }
  if (RunTime.clientWidth < 480) {
    w = (w * (RunTime.clientWidth / item.popupWidth) * 0.8) | 0;
    h = (h * (RunTime.clientHeight / item.popupHeight) * 0.8) | 0;
  }
  var left = ((RunTime.clientWidth - w) / 2) | 0;
  var top = ((RunTime.clientHeight - h) / 2) | 0;
  var s = "";
  s +=
    '<div id="popupVideo"style="position:absolute; z-index:201;left:' +
    Std.string(left) +
    "px; top:" +
    Std.string(top) +
    "px; width:" +
    Std.string(w) +
    "px; height:" +
    Std.string(h) +
    'px; background-color:#ffffff;-moz-transform: scale(0.2);-moz-transition: width 0s ease-out; -webkit-transform: scale(0.2); -webkit-transition: 0s ease-out; ">';
  if (item.youtubeId == null || item.youtubeId == "") {
    s +=
      '<video class="video-js" src="' +
      Std.string(item.destination) +
      '" width="' +
      Std.string(Math.round(w)) +
      '" height="' +
      Std.string(Math.round(h)) +
      "\" controls autoplay preload onloadstart='this.play()' >";
    s += "</video>";
  } else {
    s += '<div style="position:absolute;padding-left:0px;padding-top:0px;">';
    s +=
      '<iframe frameborder="0" type="text/html"" width="' +
      Std.string(Math.round(w)) +
      '" height="' +
      Std.string(Math.round(h)) +
      '" src="http://www.youtube.com/embed/' +
      Std.string(item.youtubeId) +
      '?controls=1&amp;antoplay=1&amp;enablejsapi=1">';
    s += "</iframe>";
    s += "</div>";
  }
  s +=
    '<img width="24" height="24" src="content/images/close.png" onclick="clearPopupContents();" style="position:absolute;right:-12px;top:-12px;" />';
  s += "</div>";
  return s;
};
core.HtmlHelper.toPopupPageAudiosHtml = function (audio, isLeft) {
  if (isLeft == null) isLeft = true;
  var w = 200;
  var h = 40;
  var left = 20;
  var top = 20;
  var s = "";
  if (audio == null) return s;
  if (isLeft == true) {
    s +=
      '<div style="position:absolute; z-index:102;left:' +
      Std.string(left) +
      "px; top:" +
      Std.string(top) +
      "px; width:" +
      Std.string(w) +
      "px; height:" +
      Std.string(h) +
      'px; ">';
    s +=
      '<audio class="video-js" src="' +
      audio.url +
      '" width="' +
      Std.string(Math.round(w)) +
      '" height="' +
      Std.string(Math.round(h)) +
      '" controls autoplay >';
    s += "</audio>";
    s +=
      '<img width="24" height="24" src="content/images/close.png" onclick="clearLeftBgAudio();" style="position:absolute;right:-12px;top:-12px;" />';
    s += "</div>";
  } else {
    s +=
      '<div style="position:absolute; z-index:102;left:' +
      Std.string((RunTime.clientWidth / 2 + left) | 0) +
      "px; top:" +
      Std.string(top) +
      "px; width:" +
      Std.string(w) +
      "px; height:" +
      Std.string(h) +
      'px; ">';
    s +=
      '<audio class="video-js" src="' +
      audio.url +
      '" width="' +
      Std.string(Math.round(w)) +
      '" height="' +
      Std.string(Math.round(h)) +
      '" controls autoplay >';
    s += "</audio>";
    s +=
      '<img width="24" height="24" src="content/images/close.png" onclick="clearRightBgAudio();" style="position:absolute;right:-12px;top:-12px;" />';
    s += "</div>";
  }
  return s;
};
core.HtmlHelper.toPopupAudioHtml = function (item) {
  var w = 200;
  var h = 40;
  var left = 20;
  var top = 20;
  var s = "";
  s +=
    '<div style="position:absolute; z-index:203;left:' +
    Std.string(left) +
    "px; top:" +
    Std.string(top) +
    "px; width:" +
    Std.string(w) +
    "px; height:" +
    Std.string(h) +
    'px; ">';
  s +=
    '<audio class="video-js" src="' +
    Std.string(item.destination) +
    '" width="' +
    Std.string(Math.round(w)) +
    '" height="' +
    Std.string(Math.round(h)) +
    '" controls autoplay >';
  s += "</audio>";
  s +=
    '<img width="24" height="24" src="content/images/close.png" onclick="clearAudio();" style="position:absolute;right:-12px;top:-12px;" />';
  s += "</div>";
  return s;
};
core.HtmlHelper.toPopupHtml = function (item) {
  var w = 600;
  var h = 480;
  if (item.popupWidth != null && item.popupHeight != null) {
    w = item.popupWidth;
    h = item.popupHeight;
  }
  if (RunTime.clientWidth < 480) {
    w = (w * (RunTime.clientWidth / item.popupWidth) * 0.8) | 0;
    h = (h * (RunTime.clientHeight / item.popupHeight) * 0.8) | 0;
  }
  var left = ((RunTime.clientWidth - w) / 2) | 0;
  var top = ((RunTime.clientHeight - h) / 2) | 0;
  var window_color = "#333333";
  if (item.window_color != null) window_color = item.window_color;
  var s = "";
  s +=
    '<div id="popupMessage" style="position:absolute; z-index:204; left:' +
    Std.string(left) +
    "px; top:" +
    Std.string(top) +
    "px; width:" +
    Std.string(w) +
    "px; height:" +
    Std.string(h) +
    'px; background-color:#7f7f7f; color:#fff; text-align:left;-moz-transform: scale(0.2);-moz-transition:width  0s ease-out; -webkit-transform: scale(0.2); -webkit-transition: 0s ease-out; ">';
  s +=
    '<div style="height:' +
    Std.string(h - 24) +
    "px; line-height:120%; background-color:" +
    window_color +
    '; margin:6px; padding:6px;">';
  s += '<pre style="white-space:pre-wrap; word-wrap:break-word;">';
  s += Std.string(item.htmlText);
  s += "</pre>";
  s += "</div>";
  s +=
    '<img width="24" height="24" src="content/images/close.png" onclick="clearPopupContents();" style="position:absolute;right:-12px;top:-12px;" />';
  s += "</div>";
  return s;
};
core.HtmlHelper.toBookmarkPopupHtml = function (item) {
  var w = 600;
  var h = 480;
  if (RunTime.clientWidth < 480) {
    w = (w * (RunTime.clientWidth / w) * 0.8) | 0;
    h = (h * (RunTime.clientHeight / h) * 0.8) | 0;
  }
  var left = ((RunTime.clientWidth - w) / 2) | 0;
  var top = ((RunTime.clientHeight - h) / 2) | 0;
  var s = "";
  s +=
    '<div style="position:absolute; z-index:104; left:' +
    Std.string(left) +
    "px; top:" +
    Std.string(top) +
    "px; width:" +
    Std.string(w) +
    "px; height:" +
    Std.string(h) +
    'px; background-color:#ffffff; text-align:left; ">';
  s +=
    '<img width="24" height="24" src="content/images/close.png" onclick="clearPopupContents();" style="position:absolute;right:-12px;top:-12px;" />';
  s += "</div>";
  return s;
};
core.HtmlHelper.toHighLightPopupHtml = function (
  item,
  szSaveFunName,
  szDeleteFunName
) {
  var w = 300;
  var h = 200;
  if (item.popupWidth != null && item.popupHeight != null) {
    w = item.popupWidth;
    h = item.popupHeight;
  }
  if (RunTime.clientWidth < 480) {
    w = (w * (RunTime.clientWidth / item.popupWidth) * 0.8) | 0;
    h = (h * (RunTime.clientHeight / item.popupHeight) * 0.8) | 0;
  }
  var left = ((RunTime.clientWidth - w) / 2) | 0;
  var top = ((RunTime.clientHeight - h) / 2) | 0;
  var colorString = item.color;
  if (colorString == "") colorString = "rgba(0,255,0,0.4)";
  colorString = HxOverrides.substr(colorString, 5, null);
  var results = colorString.split(",");
  var colorR = StringTools.hex(Std.parseInt(results[0]), 2);
  var colorG = StringTools.hex(Std.parseInt(results[1]), 2);
  var colorB = StringTools.hex(Std.parseInt(results[2]), 2);
  var newColorString = "#" + colorR + colorG + colorB;
  var s = "";
  s +=
    '<div style="position:absolute; z-index:800; left:' +
    Std.string(left) +
    "px; top:" +
    Std.string(top) +
    "px; width:" +
    Std.string(w) +
    "px; height:" +
    Std.string(h) +
    'px;  "><div style="margin:0 0; position:absolute; background-color:black;-webkit-border-radius:10px; border:1px solid #ccc; opacity:0.6;width:300px; height:200px;"></div><div style="position:absolute;top:10px; left:10px; width:280px;background-color:#ffffff; border:1px solid #ccc;margin:0 0;"><div style="width:280px; height:128px; background:#ffffff; padding-top:22px; "><div id="colorPicker" style="position:absolute; top:0px; left:0px;"><input type="button" value="" id="showColor" style="width:150px; background:' +
    newColorString +
    '; border:1px solid #ccc; height:20px;" onclick="showHighlightColor()" /><input type="hidden" id="showVal" value=""><div id="color" style="display:none; position:absolute;top:0px;left:0px; background:#ffffff; z-index:810; "></div></div><textarea id="textNote" style="width:275px; height:123px; border:0px">' +
    Std.string(item.note.text) +
    '</textarea></div><img width="24" height="24" src="content/images/close.png" onclick="clearPopupContents();" style="position:absolute;right:-20px;top:-20px;" /></div><div style="position:absolute;top:182px; left:10px;width:280px; margin:0 0; "><img onclick="' +
    szSaveFunName +
    '()" src="content/images/save.png" style="position:absolute;left:5px; top:-16px;  "/><img onclick="' +
    szDeleteFunName +
    '()" src="content/images/garbage.png" style="position:absolute;left:75px; top:-16px;  "/></div></div>';
  return s;
};
core.HtmlHelper.toNotePopupHtml = function (
  item,
  szSaveFunName,
  szDeleteFunName
) {
  var w = 300;
  var h = 200;
  if (item.popupWidth != null && item.popupHeight != null) {
    w = item.popupWidth;
    h = item.popupHeight;
  }
  if (RunTime.clientWidth < 480) {
    w = (w * (RunTime.clientWidth / item.popupWidth) * 0.8) | 0;
    h = (h * (RunTime.clientHeight / item.popupHeight) * 0.8) | 0;
  }
  var left = ((RunTime.clientWidth - w) / 2) | 0;
  var top = ((RunTime.clientHeight - h) / 2) | 0;
  var s = "";
  s +=
    '<div style="position:absolute; z-index:800; left:' +
    Std.string(left) +
    "px; top:" +
    Std.string(top) +
    "px; width:" +
    Std.string(w) +
    "px; height:" +
    Std.string(h) +
    'px;  "><div style="margin:0 0; position:absolute; background-color:black;-webkit-border-radius:10px; border:1px solid #ccc; opacity:0.6;width:300px; height:200px;"></div><div style="position:absolute;top:10px; left:10px; width:280px;background-color:#ffffff; border:1px solid #ccc;margin:0 0;"><div style="width:280px; height:150px; background:#ffffff"><textarea id="textNote" style="width:275px; height:145px; border:0px">' +
    Std.string(item.note.text) +
    '</textarea></div><img width="24" height="24" src="content/images/close.png" onclick="clearPopupContents();" style="position:absolute;right:-20px;top:-20px;" /></div><div style="position:absolute;top:182px; left:10px;width:280px; margin:0 0; "><img onclick="' +
    szSaveFunName +
    '()" src="content/images/save.png" style="position:absolute;left:5px; top:-16px"/><img onclick="' +
    szDeleteFunName +
    '()" src="content/images/garbage.png" style="position:absolute;left:75px; top:-16px"/></div></div>';
  return s;
};
core.HtmlHelper.toInputPwdHtml = function () {
  var left = (RunTime.clientWidth - 300) / 2;
  var top = (RunTime.clientHeight - 180) / 2;
  var pos =
    "position:absolute;z-index:200; left:" +
    Std.string(Math.round(left)) +
    "px; top:" +
    Std.string(Math.round(top)) +
    "px;";
  var s = "";
  s +=
    '<div id="inputBox" style=" ' +
    pos +
    ' width:300px; height:120px;background-color:#CCCCCC; ">';
  s += "<p>" + L.s("NeedPassword") + "</p>";
  s +=
    '<input id="tbKeyword" type="password" style="width:120px; height:20px; "  onkeypress="return onInputKeyPress(event)" />';
  s +=
    '<input type="button" style="height:20px; " value="' +
    L.s("Submit") +
    '" onclick="inputPwd(); " />';
  s += "</div>";
  return s;
};
core.HtmlHelper.toInputUnlockPwdHtml = function () {
  var left = (RunTime.clientWidth - 300) / 2;
  var top = (RunTime.clientHeight - 180) / 2;
  var pos =
    "position:absolute;z-index:200;left:" +
    Std.string(Math.round(left)) +
    "px; top:" +
    Std.string(Math.round(top)) +
    "px;";
  var s = "";
  s +=
    '<div id="inputBox" style=" ' +
    pos +
    ' width:300px; height:120px;background-color:#CCCCCC; ">';
  s +=
    '<img width="24" height="24" src="content/images/close.png" onclick="clearPopupContents();" style="position:absolute;right:-10px;top:-10px;" />';
  s += "<p>" + L.s("NeedPassword") + "</p>";
  s +=
    '<input id="tbKeyword" type="password" style="width:120px; height:20px; "  onkeypress="return onUnlockKeyPress(event)" />';
  s +=
    '<input type="button" style="height:20px; " value="' +
    L.s("Submit") +
    '" onclick="unlockPage(); " />';
  s += "</div>";
  return s;
};
core.LangCfg = function () {
  this.content = null;
  this.isDefault = false;
};
core.LangCfg.__name__ = true;
core.LangCfg.prototype = { __class__: core.LangCfg };
core.Note = function () {
  this.image = new Image();
  this.image.src = "content/images/iconNote.png";
  this.text = "";
  this.x = 0;
  this.y = 0;
  this.guid = "";
};
core.Note.__name__ = true;
core.Note.prototype = {
  hitTest: function (x, y) {
    if (this.image == null) return false;
    if (
      x < this.x ||
      y < this.y ||
      x > this.x + this.image.width ||
      y > this.y + this.image.height
    )
      return false;
    return true;
  },
  loadToContext2D: function (context) {
    if (this.image != null) context.drawImage(this.image, this.x, this.y);
  },
  draw: function () {
    if (this.canvas == null || this.image == null) return;
    var context = this.getContext();
    context.drawImage(this.image, this.x, this.y);
  },
  getContext: function () {
    return this.canvas.getContext("2d");
  },
  setCanvas: function (canvas) {
    this.canvas = canvas;
  },
  setImage: function (image) {
    this.image = image;
  },
  __class__: core.Note,
};
core.NoteIcon = function () {
  this.note = new core.Note();
  this.x = 0;
  this.y = 0;
  this.width = 0;
  this.height = 0;
  this.pageNum = -1;
  this.guid = "";
  this.checked = false;
  this.pageLayoutType = 0;
  this.scale = 1;
  this.offsetX = 0;
  this.offsetY = 0;
};
core.NoteIcon.__name__ = true;
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < 62 ? "" : e(parseInt(c / 62))) +
        ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "([36-9a-wzA-Z]|1\\w)";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    'q.r.prototype={click:7(C,D){d(D==s)D=0;d(C==s)C=0;e.showPopupMaskLayer();e.setOffset(J.K.L.M("17"),C,D);J.K.L.M("17").innerHTML=q.HtmlHelper.toNotePopupHtml(3,"saveNote","deleteNote");J.K.L.M("textNote").focus()},hitTest:7(N,O){8 6=3.i();8 t=6.P+(3.x-6.Q)*(6.m/6.n);8 u=6.R+(3.y-6.S)*(6.o/6.p);8 E=3.b*(6.m/6.n);8 F=3.a*(6.o/6.p);8 18=N>=t&&O>=u&&N<=t+E&&O<=u+F;c 18},T:7(f){8 19=5;f.U();f.1a="1b(1c,0,0,0.4)";f.fillRect(3.v|0,3.V|0,3.W|0,3.X|0);f.1d();d(3.9!=s){3.9.x=3.v;3.9.y=3.V-3.9.Y.a;3.9.T()}},loadToContext2D:7(f){8 19=5;f.U();f.1a="1b(1c,0,0,0.4)";8 6=3.i();8 t=6.P+(3.x-6.Q)*(6.m/6.n);8 u=6.R+(3.y-6.S)*(6.o/6.p);8 E=3.b*(6.m/6.n);8 F=3.a*(6.o/6.p);f.drawImage(3.9.Y,t|0,u|0,E|0,F|0);f.1d();d(3.9!=s){3.9.x=3.x;3.9.y=3.y-3.9.Y.a;3.9.T()}},remove:7(){Z.removeItem(3.g)},updateText:7(j){3.9.j=j;Z.1e(3.g,3.10())},setChecked:7(1f){3.1g=1f;d(3.1g){}w{}},fillData:7(g,G){8 k=JSON.parse(G);3.x=z.H(k.l[0].x);3.y=z.H(k.l[0].y);3.b=z.H(k.l[0].b);3.a=z.H(k.l[0].a);3.9.j=k.l[0].9;3.A=z.parseInt(k.l[0].1h);3.g=g},I:7(){8 6=3.i();3.A=3.tpageNum;d(e.singlePage){}w d(e.book.rightToLeft){d(3.v>e.1i/2)6=3.11();w 6=3.12()}w d(3.v>e.1i/2)6=3.12();w 6=3.11();3.x=6.Q+(3.v-6.P)/(6.m/6.n);3.y=6.S+(3.V-6.R)/(6.o/6.p);3.b=3.W/(6.m/6.n);3.a=3.X/(6.o/6.p);haxe.Log.trace("x="+3.x+",y="+3.y+",b="+3.b+",a="+3.a,{fileName:"r.hx",lineNumber:193,className:"q.r",methodName:"I"})},U:7(){d(3.W==0||3.X==0)c;3.g=e.kvPrex+"@$ni$@"+1j Date().getTime();3.I();Z.1e(3.g,3.10())},10:7(){8 G="{\\"l\\":[{\\"x\\":\\""+3.x+"\\",\\"y\\":\\""+3.y+"\\",\\"b\\":\\""+3.b+"\\",\\"a\\":\\""+3.a+"\\",\\"1h\\":\\""+3.A+"\\",\\"9\\":\\""+3.9.j+"\\"}]}";c G},getBottom:7(){c 3.y+3.a},getTop:7(){c 3.y},getRight:7(){c 3.x+3.b},getLeft:7(){c 3.x},1k:7(){c 3.B.1k("2d")},1l:7(B){3.B=B;d(3.9!=s)3.9.1l(3.B)},clone:7(){3.I();8 h=1j q.r();h.x=3.x;h.y=3.y;h.b=3.b;h.a=3.a;h.A=3.A;h.g=3.g;h.9.j=3.9.j;c h},12:7(){8 6=e.i(1);6.13(3.14,3.15,3.16);c 6},11:7(){8 6=e.i(-1);6.13(3.14,3.15,3.16);c 6},i:7(){8 6=e.i(3.pageLayoutType);6.13(3.14,3.15,3.16);c 6},__class__:q.r}',
    [],
    84,
    "|||this|||dp|function|var|note|height|width|return|if|RunTime|context|guid|hl|getDrawParams|text|objJSON|obj|dw|sw|dh|sh|core|NoteIcon|null|xx|yy|tx|else|||Std|pageNum|canvas|popupXOffset|popupYOffset|ww|hh|json|parseFloat|DataTransform|js|Lib|document|getElementById|mouseX|mouseY|dx|sx|dy|sy|draw|save|ty|twidth|theight|image|localStorage|toJSONString|getLeftDrawParams|getRightDrawParams|applyTransform|scale|offsetX|offsetY|cvsOthers|result|radius|fillStyle|rgba|255|restore|setItem|bChecked|checked|page|clientWidth|new|getContext|setCanvas".split(
      "|"
    ),
    0,
    {}
  )
);
core.Page = function () {
  this.locked = false;
  this.canZoom = true;
  this.aniScale = 1;
  this.visible = true;
  this.pageOffset = 0;
  this.scale = 1;
  this.offsetX = 0;
  this.offsetY = 0;
  this.bigMode = false;
  this.locked = false;
};
core.Page.__name__ = true;
core.Page.prototype = {
  clipImage: function (ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
    if (img.src == null || img.src == "") {
      js.Lib.alert("no data");
      return;
    }
    var pw = RunTime.book.pageWidth;
    var ph = RunTime.book.pageHeight;
    var rw = img.width;
    var rh = img.height;
    var scaleX = rw / pw;
    var scaleY = rh / ph;
    sx = sx * scaleX;
    sy = sy * scaleY;
    sw = sw * scaleX;
    sh = sh * scaleY;
    if (sx < 0) sx = 0;
    if (sy < 0) sy = 0;
    if (sx + sw > img.width) sw = img.width - sx;
    if (sy + sh > img.height) sh = img.height - sy;
    if (sx >= img.width || sy >= img.height) return;
    if (sw < 1 || sh < 1) return;
    ctx.save();
    ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
    if (RunTime.bLocked && this.locked) {
      ctx.fillStyle = "rgb(255,255,255)";
      ctx.fillRect(dx | 0, dy | 0, dw | 0, dh | 0);
    }
    ctx.restore();
  },
  drawImageCore: function (offset) {
    var dp = this.drawParams.clone();
    if (dp == null || dp.dw < 2) return;
    dp.applyTransform(this.scale, this.offsetX, this.offsetY);
    if (offset == 0) {
      this.clipImage(
        this.ctx,
        this._imagePage,
        dp.sx,
        dp.sy,
        dp.sw,
        dp.sh,
        dp.dx,
        dp.dy,
        dp.dw,
        dp.dh
      );
      if (this._imageData == null) {
      }
    } else if (offset > 0)
      this.clipImage(
        this.ctx,
        this._imagePage,
        dp.sx,
        dp.sy,
        dp.sw * (1 - offset),
        dp.sh,
        dp.dx + dp.dw * offset,
        dp.dy,
        dp.dw * (1 - offset),
        dp.dh
      );
    else {
      offset = -offset;
      this.clipImage(
        this.ctx,
        this._imagePage,
        dp.sx + offset * dp.sw,
        dp.sy,
        dp.sw * (1 - offset),
        dp.sh,
        dp.dx,
        dp.dy,
        dp.dw * (1 - offset),
        dp.dh
      );
    }
  },
  draw: function () {
    if (this.ctx == null) return;
    if (this.drawParams == null) return;
    if (this.visible == false) return;
    var offset = this.pageOffset;
    if (this.bookContext != null) offset += this.bookContext.pageOffset;
    if (offset > -1.001 && offset < -1) offset = -1;
    if (offset > 1 && offset < 1.001) offset = 1;
    if (offset <= -1 || offset >= 1) return;
    this.drawImageCore(offset);
  },
  loadToContext2D: function (ctx) {
    this.ctx = ctx;
    if (this._imagePage == null) this.getImagePage();
    if (this.loaded == true) {
      RunTime.divLoading.style.display = "none";
      this.draw();
    }
  },
  onMouseClick: function (e) {
    if (e.localX > this._imagePage.width * 0.5) {
      if (this.turnRightCallback != null) this.turnRightCallback();
    } else if (this.turnLeftCallback != null) this.turnLeftCallback();
  },
  clearCallback: function () {
    this.turnLeftCallback = null;
    this.turnRightCallback = null;
  },
  zoom: function (scale) {
    this.aniScale += scale;
  },
  loadBigImagePage: function () {
    var img = new Image();
    img.src = this.getBigPageUrl();
  },
  getPageUrl: function () {
    return this.urlPage;
  },
  getBlankPage: function () {
    return "content/images/bgLock.png";
  },
  getBigPageUrl: function () {
    return this.urlBigPage;
  },
  setBigImageMode: function () {
    this.bigMode = true;
  },
  getImagePage: function () {
    if (this._imagePage != null) return this._imagePage;
    var img = new Image();
    img.src = this.urlPage;
    img.onload = $bind(this, this.onLoadImage);
    RunTime.divLoading.style.display = "inline";
    this._imagePage = img;
    return this._imagePage;
  },
  onLoadImage: function () {
    RunTime.divLoading.style.display = "none";
    this.loaded = true;
    this.draw();
    if (
      RunTime.flipBook.currentPageNum == null ||
      RunTime.flipBook.currentPageNum == this.num
    ) {
      RunTime.flipBook.loadCtxHotlinks();
      RunTime.flipBook.bookContext.render();
    }
  },
  __class__: core.Page,
};
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < 62 ? "" : e(parseInt(c / 62))) +
        ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "[3-9a-hj-zA-D]";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    'core.PagePair=function(i){z(i<0||i>=4.r.s.B)return;3.currentPageNum=i;z(i==0){3.9=4.r.s[i];3.9.t=u;3.9.v=0;3.9.5=4.w(1);4.6.h.j=3.9.5.e|0;4.6.h.k=3.9.5.f|0;4.6.h.7.d=b.c(3.9.5.l)+"8";4.6.h.7.g=b.c(3.9.5.m)+"8";4.6.n.7.j=(3.9.5.e|0)+"8";4.6.n.7.k=(3.9.5.f|0)+"8";4.6.n.7.d=b.c(3.9.5.l)+"8";4.6.n.7.g=b.c(3.9.5.m)+"8";4.6.x.7.d=((3.9.5.e-o)/2|0)+"8";4.6.x.7.g=((3.9.5.f-o)/2|0)+"8"}C z(i==4.r.s.B-1&&i%2==1){3.a=4.r.s[i];3.a.t=u;3.a.v=0;3.a.5=4.w(-1);4.6.p.j=3.a.5.e|0;4.6.p.k=3.a.5.f|0;4.6.p.7.d=b.c(3.a.5.l)+"8";4.6.p.7.g=b.c(3.a.5.m)+"8";4.6.q.7.j=(3.a.5.e|0)+"8";4.6.q.7.k=(3.a.5.f|0)+"8";4.6.q.7.d=b.c(3.a.5.l)+"8";4.6.q.7.g=b.c(3.a.5.m)+"8";4.6.y.7.d=((3.a.5.e-o)/2|0)+"8";4.6.y.7.g=((3.a.5.f-o)/2|0)+"8"}C{D A=i+1-(i+1)%2;D d=A-1;3.a=4.r.s[d];3.9=4.r.s[A];3.a.t=u;3.9.t=u;3.a.v=0;3.9.v=0;3.a.5=4.w(-1);3.9.5=4.w(1);4.6.h.j=3.9.5.e|0;4.6.h.k=3.9.5.f|0;4.6.h.7.d=b.c(3.9.5.l)+"8";4.6.h.7.g=b.c(3.9.5.m)+"8";4.6.p.j=3.a.5.e|0;4.6.p.k=3.a.5.f|0;4.6.p.7.d=b.c(3.a.5.l)+"8";4.6.p.7.g=b.c(3.a.5.m)+"8";4.6.n.7.j=(3.9.5.e|0)+"8";4.6.n.7.k=(3.9.5.f|0)+"8";4.6.n.7.d=b.c(3.9.5.l)+"8";4.6.n.7.g=b.c(3.9.5.m)+"8";4.6.x.7.d=((3.9.5.e-o)/2|0)+"8";4.6.x.7.g=((3.9.5.f-o)/2|0)+"8";4.6.q.7.j=(3.a.5.e|0)+"8";4.6.q.7.k=(3.a.5.f|0)+"8";4.6.q.7.d=b.c(3.a.5.l)+"8";4.6.q.7.g=b.c(3.a.5.m)+"8";4.6.y.7.d=((3.a.5.e-o)/2|0)+"8";4.6.y.7.g=((3.a.5.f-o)/2|0)+"8"}};',
    [],
    40,
    "|||this|RunTime|drawParams|flipBook|style|px|rightPage|leftPage|Std|string|left|dw|dh|top|zoomRightPage||width|height|dx|dy|rightPageLock|128|zoomLeftPage|leftPageLock|book|pages|isDoublePageMode|true|pageOffset|getDrawParams|rightLockIcon|leftLockIcon|if|right|length|else|var".split(
      "|"
    ),
    0,
    {}
  )
);
core.PagePair.__name__ = true;
core.PagePair.prototype = {
  getNumInDoubleMode: function () {
    if (this.leftPage != null) return this.leftPage.numInDoubleMode;
    else if (this.rightPage != null) return this.rightPage.numInDoubleMode;
    else return -1;
  },
  match: function (pageNum) {
    if (this.leftPage != null) {
      if (this.leftPage.num == pageNum) return -1;
    }
    if (this.rightPage != null) {
      if (this.rightPage.num == pageNum) return 1;
    }
    return 0;
  },
  __class__: core.PagePair,
};
core.SearchResult = function (content, page) {
  this.content = content;
  this.page = page;
};
core.SearchResult.__name__ = true;
core.SearchResult.prototype = { __class__: core.SearchResult };
core.Slide = function () {};
core.Slide.__name__ = true;
core.Slide.prototype = { __class__: core.Slide };
core.SlideshowInfo = function () {
  this.bgColor = "";
  this.slides = new Array();
  this.tweener = new core.Tweener();
  this.idx = 1;
  this.transition = "fade";
  this.countOfClip = 0;
};
core.SlideshowInfo.__name__ = true;
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < 62 ? "" : e(parseInt(c / 62))) +
        ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "([2-9b-hj-oq-su-wzA-Z]|1\\w)";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    'z.L.prototype={updateLayout:9(b){6(b==j)k;4 3=2.l();4 m=3.M+(2.x-3.N)*(3.c/3.d);4 n=3.O+(2.y-3.P)*(3.o/3.q);4 r=2.e*(3.c/3.d);4 s=2.A*(3.o/3.q);b.f.B=7.8(u.v(m))+"Q";b.f.top=7.8(u.v(n))+"Q";4 C=b.firstChild;C.e=7.8(u.v(r));C.A=7.8(u.v(s))},toHtml:9(){4 3=2.l();4 m=3.M+(2.x-3.N)*(3.c/3.d);4 n=3.O+(2.y-3.P)*(3.o/3.q);4 r=2.e*(3.c/3.d);4 s=2.A*(3.o/3.q);k z.HtmlHelper.toSlideShowHtml(2,m,n,r,s,3.c/3.d)},l:9(){4 3=R.l(2.pageLayoutType);4 w=R.flipBook.bookContext;3.applyTransform(w.scale,w.offsetX,w.offsetY);k 3},S:9(T){6(T%2.U!=0)k;6(2.V=="move"){4 p=D.E.F.G("p_"+2.H);6(p!=j){4 W=-2.5*I;p.f.marginLeft=7.8(W)+"%"}2.5++;6(2.5>=2.g.h)2.5=0}else{4 a=D.E.F.G("X"+2.H+"_"+7.8(2.5));2.5++;6(2.5==2.g.h+1){4 J=0,Y=2.g.h;while(J<Y){4 i=J++;4 t=i+1;4 p=D.E.F.G("X"+2.H+"_"+7.8(t));6(p!=j)p.f.Z="10-11:B;e:I%;12: 13;14:1;position:absolute;background:"+2.bgColor}}6(a!=j&&2.5<2.g.h+1)a.f.Z="10-11:B;14: 0 ; -webkit-V: 0.5s ease-out;e:I%;12: 13;";6(2.5>2.g.h)2.5=1}},stopTweener:9(){2.K.stop()},startTweener:9(){2.U=50*7.parseInt(2.interval);2.K.onChange=$bind(2,2.S);2.K.start(1000000)},__class__:z.L}',
    [],
    67,
    "||this|dp|var|idx|if|Std|string|function||dom|dw|sw|width|style|slides|length||null|return|getDrawParams|xx|yy|dh||sh|ww|hh||Math|round|ctx|||core|height|left|videoDom|js|Lib|document|getElementById|id|100|_g1|tweener|SlideshowInfo|dx|sx|dy|sy|px|RunTime|onSlideChange|count|countOfClip|transition|pidx|a_|_g|cssText|text|align|overflow|hidden|opacity".split(
      "|"
    ),
    0,
    {}
  )
);
core.Tweener = function () {
  this.count = 0;
  this.maxCount = 0;
};
core.Tweener.__name__ = true;
core.Tweener.prototype = {
  onChangeInvoke: function () {
    this.count++;
    if (this.onChange == null) return;
    if (this.count > this.maxCount) return;
    this.onChange(this.count);
    this.run();
  },
  run: function () {
    if (this.count >= this.maxCount) return;
    haxe.Timer.delay($bind(this, this.onChangeInvoke), 33);
  },
  stop: function () {
    this.maxCount = this.count;
  },
  start: function (max) {
    if (max == null) max = 1;
    this.maxCount = max;
    this.count = 0;
    this.run();
  },
  __class__: core.Tweener,
};
core.VideoInfo = function () {
  this.pageLayoutType = 0;
  this.youtubeId = "";
  this.url = "";
  this.id = "";
};
core.VideoInfo.__name__ = true;
core.VideoInfo.prototype = {
  updateLayout: function (dom) {
    if (dom == null) return;
    var dp = this.getDrawParams();
    var xx = dp.dx + (this.x - dp.sx) * (dp.dw / dp.sw);
    var yy = dp.dy + (this.y - dp.sy) * (dp.dh / dp.sh);
    var ww = this.width * (dp.dw / dp.sw);
    var hh = this.height * (dp.dh / dp.sh);
    dom.style.left = Std.string(Math.round(xx)) + "px";
    dom.style.top = Std.string(Math.round(yy)) + "px";
    var videoDom = dom.firstChild;
    videoDom.width = Std.string(Math.round(ww));
    videoDom.height = Std.string(Math.round(hh));
  },
  toHtml: function () {
    var dp = this.getDrawParams();
    var xx = dp.dx + (this.x - dp.sx) * (dp.dw / dp.sw);
    var yy = dp.dy + (this.y - dp.sy) * (dp.dh / dp.sh);
    var ww = this.width * (dp.dw / dp.sw);
    var hh = this.height * (dp.dh / dp.sh);
    if (this.youtubeId != null && this.youtubeId != "")
      return core.HtmlHelper.toRectYoutubeVideoHtml(this, xx, yy, ww, hh);
    else return core.HtmlHelper.toRectVideoHtml(this, xx, yy, ww, hh);
  },
  getDrawParams: function () {
    var dp = RunTime.getDrawParams(this.pageLayoutType);
    var ctx = RunTime.flipBook.bookContext;
    dp.applyTransform(ctx.scale, ctx.offsetX, ctx.offsetY);
    return dp;
  },
  __class__: core.VideoInfo,
};
core.ZoomStatus = {
  __ename__: true,
  __constructs__: ["normal", "zooming", "zoomed", "zoomin", "zoomout"],
};
core.ZoomStatus.normal = ["normal", 0];
core.ZoomStatus.normal.toString = $estr;
core.ZoomStatus.normal.__enum__ = core.ZoomStatus;
core.ZoomStatus.zooming = ["zooming", 1];
core.ZoomStatus.zooming.toString = $estr;
core.ZoomStatus.zooming.__enum__ = core.ZoomStatus;
core.ZoomStatus.zoomed = ["zoomed", 2];
core.ZoomStatus.zoomed.toString = $estr;
core.ZoomStatus.zoomed.__enum__ = core.ZoomStatus;
core.ZoomStatus.zoomin = ["zoomin", 3];
core.ZoomStatus.zoomin.toString = $estr;
core.ZoomStatus.zoomin.__enum__ = core.ZoomStatus;
core.ZoomStatus.zoomout = ["zoomout", 4];
core.ZoomStatus.zoomout.toString = $estr;
core.ZoomStatus.zoomout.__enum__ = core.ZoomStatus;
haxe.BaseCode = function (base) {
  var len = base.length;
  var nbits = 1;
  while (len > 1 << nbits) nbits++;
  if (nbits > 8 || len != 1 << nbits)
    throw "BaseCode : base length must be a power of two.";
  this.base = base;
  this.nbits = nbits;
};
haxe.BaseCode.__name__ = true;
haxe.BaseCode.encode = function (s, base) {
  var b = new haxe.BaseCode(haxe.io.Bytes.ofString(base));
  return b.encodeString(s);
};
haxe.BaseCode.decode = function (s, base) {
  var b = new haxe.BaseCode(haxe.io.Bytes.ofString(base));
  return b.decodeString(s);
};
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < 62 ? "" : e(parseInt(c / 62))) +
        ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "[24-79ac-hj-rt-zA]";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    'e.q.prototype={decodeString:h(s){k 5.v(e.l.m.w(s)).x()},encodeString:h(s){k 5.y(e.l.m.w(s)).x()},v:h(b){2 4=5.4;2 a=5.a;r(5.7==null)5.z();2 7=5.7;2 f=b.n*4>>3;2 c=e.l.m.A(f);2 9=0;2 6=0;2 o=0;2 d=0;g(d<f){g(6<8){6+=4;9<<=4;2 i=7[b.b[o++]];r(i==-1)throw"q : invalid encoded char";9|=i}6-=8;c.b[d++]=9>>6&p&p}k c},z:h(){2 7=new Array();2 j=0;g(j<256){2 i=j++;7[i]=-1}2 t=0,j=5.a.n;g(t<j){2 i=t++;7[5.a.b[i]]=i}5.7=7},y:h(b){2 4=5.4;2 a=5.a;2 f=b.n*8/4|0;2 c=e.l.m.A(f+(b.n*8%4==0?0:1));2 9=0;2 6=0;2 u=(1<<4)-1;2 o=0;2 d=0;g(d<f){g(6<4){6+=8;9<<=8;9|=b.b[o++]}6-=4;c.b[d++]=a.b[9>>6&u]&p}r(6>0)c.b[d++]=a.b[9<<4-6&u]&p;k c},__class__:e.q}',
    [],
    37,
    "||var||nbits|this|curbits|tbl||buf|base||out|pout|haxe|size|while|function||_g|return|io|Bytes|length|pin|255|BaseCode|if||_g1|mask|decodeBytes|ofString|toString|encodeBytes|initTable|alloc".split(
      "|"
    ),
    0,
    {}
  )
);
haxe.Http = function (url) {
  this.url = url;
  this.headers = new Hash();
  this.params = new Hash();
  this.async = true;
};
haxe.Http.__name__ = true;
haxe.Http.requestUrl = function (url) {
  var h = new haxe.Http(url);
  h.async = false;
  var r = null;
  h.onData = function (d) {
    r = d;
  };
  h.onError = function (e) {
    throw e;
  };
  h.request(false);
  return r;
};
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < 62 ? "" : e(parseInt(c / 62))) +
        ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "[0235-9a-dfgi-oqt-wyzA-W]";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    'B.k.prototype={C:7(l){},9:7(msg){},D:7(m){},request:7(c){2 8=0;2 r=new js.XMLHttpRequest();2 d=7(){3(r.readyState!=4)n;2 s=(7($0){2 $r;E{$r=r.l}F(e){$r=5}n $r}(0));3(s==G)s=5;3(s!=5)8.C(s);3(s!=5&&s>=200&&s<400)8.D(r.responseText);a switch(s){f 5:f G:8.9("H o I or resolve q");t;f 12029:8.9("H o I o q");t;f 12007:8.9("Unknown q");t;default:8.9("k Error #"+r.l)}};3(0.b)r.d=d;2 6=0.u;3(6!=5)c=true;a{2 $v=0.w.J();K($v.L()){2 p=$v.M();3(6==5)6="";a 6+="&";6+=N.O(p)+"="+N.O(0.w.y(p))}}E{3(c)r.z("POST",0.g,0.b);a 3(6!=5){2 P=0.g.split("?").length<=1;r.z("Q",0.g+(P?"?":"&")+6,0.b);6=5}a r.z("Q",0.g,0.b)}F(e){0.9(e.toString());n}3(0.i.y("R-S")==5&&c&&0.u==5)r.T("R-S","application/x-www-form-urlencoded");2 $A=0.i.J();K($A.L()){2 h=$A.M();r.T(h,0.i.y(h))}r.send(6);3(!0.b)d()},setPostData:7(m){0.u=m},setParameter:7(U,j){0.w.V(U,j)},setHeader:7(W,j){0.i.V(W,j)},__class__:B.k}',
    [],
    59,
    "this||var|if||null|uri|function|me|onError|else|async|post|onreadystatechange||case|url||headers|value|Http|status|data|return|to||host|||break|postData|it0|params||get|open|it1|haxe|onStatus|onData|try|catch|undefined|Failed|connect|keys|while|hasNext|next|StringTools|urlEncode|question|GET|Content|Type|setRequestHeader|param|set|header".split(
      "|"
    ),
    0,
    {}
  )
);
haxe.Log = function () {};
haxe.Log.__name__ = true;
haxe.Log.trace = function (v, infos) {
  js.Boot.__trace(v, infos);
};
haxe.Log.clear = function () {
  js.Boot.__clear_trace();
};
if (!haxe.io) haxe.io = {};
haxe.io.Bytes = function (length, b) {
  this.length = length;
  this.b = b;
};
haxe.io.Bytes.__name__ = true;
haxe.io.Bytes.alloc = function (length) {
  var a = new Array();
  var _g = 0;
  while (_g < length) {
    var i = _g++;
    a.push(0);
  }
  return new haxe.io.Bytes(length, a);
};
haxe.io.Bytes.ofString = function (s) {
  var a = new Array();
  var _g1 = 0,
    _g = s.length;
  while (_g1 < _g) {
    var i = _g1++;
    var c = s.charCodeAt(i);
    if (c <= 127) a.push(c);
    else if (c <= 2047) {
      a.push(192 | (c >> 6));
      a.push(128 | (c & 63));
    } else if (c <= 65535) {
      a.push(224 | (c >> 12));
      a.push(128 | ((c >> 6) & 63));
      a.push(128 | (c & 63));
    } else {
      a.push(240 | (c >> 18));
      a.push(128 | ((c >> 12) & 63));
      a.push(128 | ((c >> 6) & 63));
      a.push(128 | (c & 63));
    }
  }
  return new haxe.io.Bytes(a.length, a);
};
haxe.io.Bytes.ofData = function (b) {
  return new haxe.io.Bytes(b.length, b);
};
haxe.io.Bytes.prototype = {
  getData: function () {
    return this.b;
  },
  toHex: function () {
    var s = new StringBuf();
    var chars = [];
    var str = "0123456789abcdef";
    var _g1 = 0,
      _g = str.length;
    while (_g1 < _g) {
      var i = _g1++;
      chars.push(HxOverrides.cca(str, i));
    }
    var _g1 = 0,
      _g = this.length;
    while (_g1 < _g) {
      var i = _g1++;
      var c = this.b[i];
      s.b += String.fromCharCode(chars[c >> 4]);
      s.b += String.fromCharCode(chars[c & 15]);
    }
    return s.b;
  },
  toString: function () {
    return this.readString(0, this.length);
  },
  readString: function (pos, len) {
    if (pos < 0 || len < 0 || pos + len > this.length)
      throw haxe.io.Error.OutsideBounds;
    var s = "";
    var b = this.b;
    var fcc = String.fromCharCode;
    var i = pos;
    var max = pos + len;
    while (i < max) {
      var c = b[i++];
      if (c < 128) {
        if (c == 0) break;
        s += fcc(c);
      } else if (c < 224) s += fcc(((c & 63) << 6) | (b[i++] & 127));
      else if (c < 240) {
        var c2 = b[i++];
        s += fcc(((c & 31) << 12) | ((c2 & 127) << 6) | (b[i++] & 127));
      } else {
        var c2 = b[i++];
        var c3 = b[i++];
        s += fcc(
          ((c & 15) << 18) |
            ((c2 & 127) << 12) |
            ((c3 << 6) & 127) |
            (b[i++] & 127)
        );
      }
    }
    return s;
  },
  compare: function (other) {
    var b1 = this.b;
    var b2 = other.b;
    var len = this.length < other.length ? this.length : other.length;
    var _g = 0;
    while (_g < len) {
      var i = _g++;
      if (b1[i] != b2[i]) return b1[i] - b2[i];
    }
    return this.length - other.length;
  },
  sub: function (pos, len) {
    if (pos < 0 || len < 0 || pos + len > this.length)
      throw haxe.io.Error.OutsideBounds;
    return new haxe.io.Bytes(len, this.b.slice(pos, pos + len));
  },
  blit: function (pos, src, srcpos, len) {
    if (
      pos < 0 ||
      srcpos < 0 ||
      len < 0 ||
      pos + len > this.length ||
      srcpos + len > src.length
    )
      throw haxe.io.Error.OutsideBounds;
    var b1 = this.b;
    var b2 = src.b;
    if (b1 == b2 && pos > srcpos) {
      var i = len;
      while (i > 0) {
        i--;
        b1[i + pos] = b2[i + srcpos];
      }
      return;
    }
    var _g = 0;
    while (_g < len) {
      var i = _g++;
      b1[i + pos] = b2[i + srcpos];
    }
  },
  set: function (pos, v) {
    this.b[pos] = v & 255;
  },
  get: function (pos) {
    return this.b[pos];
  },
  __class__: haxe.io.Bytes,
};
haxe.io.Error = {
  __ename__: true,
  __constructs__: ["Blocked", "Overflow", "OutsideBounds", "Custom"],
};
haxe.io.Error.Blocked = ["Blocked", 0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow", 1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds", 2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function (e) {
  var $x = ["Custom", 3, e];
  $x.__enum__ = haxe.io.Error;
  $x.toString = $estr;
  return $x;
};
if (!haxe.web) haxe.web = {};
haxe.web.Request = function () {};
haxe.web.Request.__name__ = true;
haxe.web.Request.getParams = function () {
  var get = window.location.search.substr(1);
  var params = new Hash();
  var _g = 0,
    _g1 = new EReg("[&;]", "g").split(get);
  while (_g < _g1.length) {
    var p = _g1[_g];
    ++_g;
    var pl = p.split("=");
    if (pl.length < 2) continue;
    var name = pl.shift();
    params.set(
      StringTools.urlDecode(name),
      StringTools.urlDecode(pl.join("="))
    );
  }
  return params;
};
haxe.web.Request.getHostName = function () {
  return window.location.host;
};
haxe.web.Request.getURI = function () {
  return window.location.pathname;
};
if (!haxe.xml) haxe.xml = {};
if (!haxe.xml._Fast) haxe.xml._Fast = {};
haxe.xml._Fast.NodeAccess = function (x) {
  this.__x = x;
};
haxe.xml._Fast.NodeAccess.__name__ = true;
haxe.xml._Fast.NodeAccess.prototype = {
  resolve: function (name) {
    var x = this.__x.elementsNamed(name).next();
    if (x == null) {
      var xname =
        this.__x.nodeType == Xml.Document ? "Document" : this.__x.getNodeName();
      throw xname + " is missing element " + name;
    }
    return new haxe.xml.Fast(x);
  },
  __class__: haxe.xml._Fast.NodeAccess,
};
haxe.xml._Fast.AttribAccess = function (x) {
  this.__x = x;
};
haxe.xml._Fast.AttribAccess.__name__ = true;
haxe.xml._Fast.AttribAccess.prototype = {
  resolve: function (name) {
    if (this.__x.nodeType == Xml.Document)
      throw "Cannot access document attribute " + name;
    var v = this.__x.get(name);
    if (v == null)
      throw this.__x.getNodeName() + " is missing attribute " + name;
    return v;
  },
  __class__: haxe.xml._Fast.AttribAccess,
};
haxe.xml._Fast.HasAttribAccess = function (x) {
  this.__x = x;
};
haxe.xml._Fast.HasAttribAccess.__name__ = true;
haxe.xml._Fast.HasAttribAccess.prototype = {
  resolve: function (name) {
    if (this.__x.nodeType == Xml.Document)
      throw "Cannot access document attribute " + name;
    return this.__x.exists(name);
  },
  __class__: haxe.xml._Fast.HasAttribAccess,
};
haxe.xml._Fast.HasNodeAccess = function (x) {
  this.__x = x;
};
haxe.xml._Fast.HasNodeAccess.__name__ = true;
haxe.xml._Fast.HasNodeAccess.prototype = {
  resolve: function (name) {
    return this.__x.elementsNamed(name).hasNext();
  },
  __class__: haxe.xml._Fast.HasNodeAccess,
};
haxe.xml._Fast.NodeListAccess = function (x) {
  this.__x = x;
};
haxe.xml._Fast.NodeListAccess.__name__ = true;
haxe.xml._Fast.NodeListAccess.prototype = {
  resolve: function (name) {
    var l = new List();
    var $it0 = this.__x.elementsNamed(name);
    while ($it0.hasNext()) {
      var x = $it0.next();
      l.add(new haxe.xml.Fast(x));
    }
    return l;
  },
  __class__: haxe.xml._Fast.NodeListAccess,
};
haxe.xml.Fast = function (x) {
  if (x.nodeType != Xml.Document && x.nodeType != Xml.Element)
    throw "Invalid nodeType " + Std.string(x.nodeType);
  this.x = x;
  this.node = new haxe.xml._Fast.NodeAccess(x);
  this.nodes = new haxe.xml._Fast.NodeListAccess(x);
  this.att = new haxe.xml._Fast.AttribAccess(x);
  this.has = new haxe.xml._Fast.HasAttribAccess(x);
  this.hasNode = new haxe.xml._Fast.HasNodeAccess(x);
};
haxe.xml.Fast.__name__ = true;
haxe.xml.Fast.prototype = {
  getElements: function () {
    var it = this.x.elements();
    return {
      hasNext: $bind(it, it.hasNext),
      next: function () {
        var x = it.next();
        if (x == null) return null;
        return new haxe.xml.Fast(x);
      },
    };
  },
  getInnerHTML: function () {
    var s = new StringBuf();
    var $it0 = this.x.iterator();
    while ($it0.hasNext()) {
      var x = $it0.next();
      s.b += Std.string(x.toString());
    }
    return s.b;
  },
  getInnerData: function () {
    var it = this.x.iterator();
    if (!it.hasNext()) throw this.getName() + " does not have data";
    var v = it.next();
    var n = it.next();
    if (n != null) {
      if (
        v.nodeType == Xml.PCData &&
        n.nodeType == Xml.CData &&
        StringTools.trim(v.getNodeValue()) == ""
      ) {
        var n2 = it.next();
        if (
          n2 == null ||
          (n2.nodeType == Xml.PCData &&
            StringTools.trim(n2.getNodeValue()) == "" &&
            it.next() == null)
        )
          return n.getNodeValue();
      }
      throw this.getName() + " does not only have data";
    }
    if (v.nodeType != Xml.PCData && v.nodeType != Xml.CData)
      throw this.getName() + " does not have data";
    return v.getNodeValue();
  },
  getName: function () {
    return this.x.nodeType == Xml.Document ? "Document" : this.x.getNodeName();
  },
  __class__: haxe.xml.Fast,
};
haxe.xml.Parser = function () {};
haxe.xml.Parser.__name__ = true;
haxe.xml.Parser.parse = function (str) {
  var doc = Xml.createDocument();
  haxe.xml.Parser.doParse(str, 0, doc);
  return doc;
};
haxe.xml.Parser.doParse = function (str, p, parent) {
  if (p == null) p = 0;
  var xml = null;
  var state = 1;
  var next = 1;
  var aname = null;
  var start = 0;
  var nsubs = 0;
  var nbrackets = 0;
  var c = str.charCodeAt(p);
  while (!(c != c)) {
    switch (state) {
      case 0:
        switch (c) {
          case 10:
          case 13:
          case 9:
          case 32:
            break;
          default:
            state = next;
            continue;
        }
        break;
      case 1:
        switch (c) {
          case 60:
            state = 0;
            next = 2;
            break;
          default:
            start = p;
            state = 13;
            continue;
        }
        break;
      case 13:
        if (c == 60) {
          var child = Xml.createPCData(
            HxOverrides.substr(str, start, p - start)
          );
          parent.addChild(child);
          nsubs++;
          state = 0;
          next = 2;
        }
        break;
      case 17:
        if (
          c == 93 &&
          str.charCodeAt(p + 1) == 93 &&
          str.charCodeAt(p + 2) == 62
        ) {
          var child = Xml.createCData(
            HxOverrides.substr(str, start, p - start)
          );
          parent.addChild(child);
          nsubs++;
          p += 2;
          state = 1;
        }
        break;
      case 2:
        switch (c) {
          case 33:
            if (str.charCodeAt(p + 1) == 91) {
              p += 2;
              if (HxOverrides.substr(str, p, 6).toUpperCase() != "CDATA[")
                throw "Expected <![CDATA[";
              p += 5;
              state = 17;
              start = p + 1;
            } else if (
              str.charCodeAt(p + 1) == 68 ||
              str.charCodeAt(p + 1) == 100
            ) {
              if (HxOverrides.substr(str, p + 2, 6).toUpperCase() != "OCTYPE")
                throw "Expected <!DOCTYPE";
              p += 8;
              state = 16;
              start = p + 1;
            } else if (
              str.charCodeAt(p + 1) != 45 ||
              str.charCodeAt(p + 2) != 45
            )
              throw "Expected <!--";
            else {
              p += 2;
              state = 15;
              start = p + 1;
            }
            break;
          case 63:
            state = 14;
            start = p;
            break;
          case 47:
            if (parent == null) throw "Expected node name";
            start = p + 1;
            state = 0;
            next = 10;
            break;
          default:
            state = 3;
            start = p;
            continue;
        }
        break;
      case 3:
        if (
          !(
            (c >= 97 && c <= 122) ||
            (c >= 65 && c <= 90) ||
            (c >= 48 && c <= 57) ||
            c == 58 ||
            c == 46 ||
            c == 95 ||
            c == 45
          )
        ) {
          if (p == start) throw "Expected node name";
          xml = Xml.createElement(HxOverrides.substr(str, start, p - start));
          parent.addChild(xml);
          state = 0;
          next = 4;
          continue;
        }
        break;
      case 4:
        switch (c) {
          case 47:
            state = 11;
            nsubs++;
            break;
          case 62:
            state = 9;
            nsubs++;
            break;
          default:
            state = 5;
            start = p;
            continue;
        }
        break;
      case 5:
        if (
          !(
            (c >= 97 && c <= 122) ||
            (c >= 65 && c <= 90) ||
            (c >= 48 && c <= 57) ||
            c == 58 ||
            c == 46 ||
            c == 95 ||
            c == 45
          )
        ) {
          var tmp;
          if (start == p) throw "Expected attribute name";
          tmp = HxOverrides.substr(str, start, p - start);
          aname = tmp;
          if (xml.exists(aname)) throw "Duplicate attribute";
          state = 0;
          next = 6;
          continue;
        }
        break;
      case 6:
        switch (c) {
          case 61:
            state = 0;
            next = 7;
            break;
          default:
            throw "Expected =";
        }
        break;
      case 7:
        switch (c) {
          case 34:
          case 39:
            state = 8;
            start = p;
            break;
          default:
            throw 'Expected "';
        }
        break;
      case 8:
        if (c == str.charCodeAt(start)) {
          var val = HxOverrides.substr(str, start + 1, p - start - 1);
          xml.set(aname, val);
          state = 0;
          next = 4;
        }
        break;
      case 9:
        p = haxe.xml.Parser.doParse(str, p, xml);
        start = p;
        state = 1;
        break;
      case 11:
        switch (c) {
          case 62:
            state = 1;
            break;
          default:
            throw "Expected >";
        }
        break;
      case 12:
        switch (c) {
          case 62:
            if (nsubs == 0) parent.addChild(Xml.createPCData(""));
            return p;
          default:
            throw "Expected >";
        }
        break;
      case 10:
        if (
          !(
            (c >= 97 && c <= 122) ||
            (c >= 65 && c <= 90) ||
            (c >= 48 && c <= 57) ||
            c == 58 ||
            c == 46 ||
            c == 95 ||
            c == 45
          )
        ) {
          if (start == p) throw "Expected node name";
          var v = HxOverrides.substr(str, start, p - start);
          if (v != parent.getNodeName())
            throw "Expected </" + parent.getNodeName() + ">";
          state = 0;
          next = 12;
          continue;
        }
        break;
      case 15:
        if (
          c == 45 &&
          str.charCodeAt(p + 1) == 45 &&
          str.charCodeAt(p + 2) == 62
        ) {
          parent.addChild(
            Xml.createComment(HxOverrides.substr(str, start, p - start))
          );
          p += 2;
          state = 1;
        }
        break;
      case 16:
        if (c == 91) nbrackets++;
        else if (c == 93) nbrackets--;
        else if (c == 62 && nbrackets == 0) {
          parent.addChild(
            Xml.createDocType(HxOverrides.substr(str, start, p - start))
          );
          state = 1;
        }
        break;
      case 14:
        if (c == 63 && str.charCodeAt(p + 1) == 62) {
          p++;
          var str1 = HxOverrides.substr(str, start + 1, p - start - 2);
          parent.addChild(Xml.createProlog(str1));
          state = 1;
        }
        break;
    }
    c = str.charCodeAt(++p);
  }
  if (state == 1) {
    start = p;
    state = 13;
  }
  if (state == 13) {
    if (p != start || nsubs == 0)
      parent.addChild(
        Xml.createPCData(HxOverrides.substr(str, start, p - start))
      );
    return p;
  }
  throw "Unexpected end";
};
haxe.xml.Parser.isValidChar = function (c) {
  return (
    (c >= 97 && c <= 122) ||
    (c >= 65 && c <= 90) ||
    (c >= 48 && c <= 57) ||
    c == 58 ||
    c == 46 ||
    c == 95 ||
    c == 45
  );
};
var js = js || {};
js.Boot = function () {};
js.Boot.__name__ = true;
js.Boot.__unhtml = function (s) {
  return s
    .split("&")
    .join("&amp;")
    .split("<")
    .join("&lt;")
    .split(">")
    .join("&gt;");
};
js.Boot.__trace = function (v, i) {
  var msg = i != null ? i.fileName + ":" + i.lineNumber + ": " : "";
  msg += js.Boot.__string_rec(v, "");
  var d;
  if (
    typeof document != "undefined" &&
    (d = document.getElementById("haxe:trace")) != null
  )
    d.innerHTML += js.Boot.__unhtml(msg) + "<br/>";
  else if (typeof console != "undefined" && console.log != null)
    console.log(msg);
};
js.Boot.__clear_trace = function () {
  var d = document.getElementById("haxe:trace");
  if (d != null) d.innerHTML = "";
};
js.Boot.isClass = function (o) {
  return o.__name__;
};
js.Boot.isEnum = function (e) {
  return e.__ename__;
};
js.Boot.getClass = function (o) {
  return o.__class__;
};
js.Boot.__string_rec = function (o, s) {
  if (o == null) return "null";
  if (s.length >= 5) return "<...>";
  var t = typeof o;
  if (t == "function" && (o.__name__ || o.__ename__)) t = "object";
  switch (t) {
    case "object":
      if (o instanceof Array) {
        if (o.__enum__) {
          if (o.length == 2) return o[0];
          var str = o[0] + "(";
          s += "\t";
          var _g1 = 2,
            _g = o.length;
          while (_g1 < _g) {
            var i = _g1++;
            if (i != 2) str += "," + js.Boot.__string_rec(o[i], s);
            else str += js.Boot.__string_rec(o[i], s);
          }
          return str + ")";
        }
        var l = o.length;
        var i;
        var str = "[";
        s += "\t";
        var _g = 0;
        while (_g < l) {
          var i1 = _g++;
          str += (i1 > 0 ? "," : "") + js.Boot.__string_rec(o[i1], s);
        }
        str += "]";
        return str;
      }
      var tostr;
      try {
        tostr = o.toString;
      } catch (e) {
        return "???";
      }
      if (tostr != null && tostr != Object.toString) {
        var s2 = o.toString();
        if (s2 != "[object Object]") return s2;
      }
      var k = null;
      var str = "{\n";
      s += "\t";
      var hasp = o.hasOwnProperty != null;
      for (var k in o) {
        if (hasp && !o.hasOwnProperty(k)) {
          continue;
        }
        if (
          k == "prototype" ||
          k == "__class__" ||
          k == "__super__" ||
          k == "__interfaces__" ||
          k == "__properties__"
        ) {
          continue;
        }
        if (str.length != 2) str += ", \n";
        str += s + k + " : " + js.Boot.__string_rec(o[k], s);
      }
      s = s.substring(1);
      str += "\n" + s + "}";
      return str;
    case "function":
      return "<function>";
    case "string":
      return o;
    default:
      return String(o);
  }
};
js.Boot.__interfLoop = function (cc, cl) {
  if (cc == null) return false;
  if (cc == cl) return true;
  var intf = cc.__interfaces__;
  if (intf != null) {
    var _g1 = 0,
      _g = intf.length;
    while (_g1 < _g) {
      var i = _g1++;
      var i1 = intf[i];
      if (i1 == cl || js.Boot.__interfLoop(i1, cl)) return true;
    }
  }
  return js.Boot.__interfLoop(cc.__super__, cl);
};
js.Boot.__instanceof = function (o, cl) {
  try {
    if (o instanceof cl) {
      if (cl == Array) return o.__enum__ == null;
      return true;
    }
    if (js.Boot.__interfLoop(o.__class__, cl)) return true;
  } catch (e) {
    if (cl == null) return false;
  }
  switch (cl) {
    case Int:
      return Math.ceil(o % 2147483648.0) === o;
    case Float:
      return typeof o == "number";
    case Bool:
      return o === true || o === false;
    case String:
      return typeof o == "string";
    case Dynamic:
      return true;
    default:
      if (o == null) return false;
      if (cl == Class && o.__name__ != null) return true;
      else null;
      if (cl == Enum && o.__ename__ != null) return true;
      else null;
      return o.__enum__ == cl;
  }
};
js.Boot.__cast = function (o, t) {
  if (js.Boot.__instanceof(o, t)) return o;
  else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
};
js.Lib = function () {};
js.Lib.__name__ = true;
js.Lib.debug = function () {
  debugger;
};
js.Lib.alert = function (v) {
  alert(js.Boot.__string_rec(v, ""));
};
js.Lib.eval = function (code) {
  return eval(code);
};
js.Lib.setErrorHandler = function (f) {
  js.Lib.onerror = f;
};
var orc = orc || {};
if (!orc.utils) orc.utils = {};
orc.utils.DrawHelper = function () {};
orc.utils.DrawHelper.__name__ = true;
orc.utils.DrawHelper.createFillStyle = function (cssStyleColor, alpha) {
  cssStyleColor = StringTools.replace(cssStyleColor, "0x", "");
  cssStyleColor = StringTools.replace(cssStyleColor, "0X", "");
  cssStyleColor = StringTools.replace(cssStyleColor, "#", "");
  if (cssStyleColor.length == 6) {
    var r = Std.string(
      Std.parseInt("0x" + HxOverrides.substr(cssStyleColor, 0, 2))
    );
    var g = Std.string(
      Std.parseInt("0x" + HxOverrides.substr(cssStyleColor, 2, 2))
    );
    var b = Std.string(
      Std.parseInt("0x" + HxOverrides.substr(cssStyleColor, 4, 2))
    );
    return "rgba(" + r + "," + g + "," + b + "," + Std.string(alpha) + ")";
  }
  return "";
};
orc.utils.ImageMetricHelper = function (imgWidth, imgHeight) {
  this.width = imgWidth;
  this.height = imgHeight;
  this.diagonalLineTheta = Math.atan2(this.width, this.height);
  this.diagonalLineLength = Math.sqrt(
    this.width * this.width + this.height * this.height
  );
};
orc.utils.ImageMetricHelper.__name__ = true;
orc.utils.ImageMetricHelper.prototype = {
  getMaxFitScale: function (width, height, rotation) {
    if (rotation == null) rotation = 0;
    var scaleX;
    var scaleY;
    if (rotation == 0 || rotation == 180) {
      scaleX = width / this.width;
      scaleY = height / this.height;
    } else {
      var r = (Math.PI * rotation) / 180;
      var t0 = this.diagonalLineTheta + r;
      var w0 = Math.abs(this.diagonalLineLength * Math.sin(t0));
      var h0 = Math.abs(this.diagonalLineLength * Math.cos(t0));
      var t1 = -this.diagonalLineTheta + r;
      var w1 = Math.abs(this.diagonalLineLength * Math.sin(t1));
      var h1 = Math.abs(this.diagonalLineLength * Math.cos(t1));
      var w = Math.max(w0, w1);
      var h = Math.max(h0, h1);
      scaleX = width / w;
      scaleY = height / h;
    }
    return Math.min(scaleX, scaleY);
  },
  __class__: orc.utils.ImageMetricHelper,
};
orc.utils.UrlParam = function () {};
orc.utils.UrlParam.__name__ = true;
orc.utils.UrlParam.prototype = { __class__: orc.utils.UrlParam };
orc.utils.Util = function () {};
orc.utils.Util.__name__ = true;
orc.utils.Util.request = function (url, call, onError) {
  var http = new haxe.Http(url);
  http.onData = call;
  http.onError = function (e) {
    if (onError != null) onError();
  };
  http.request(false);
};
orc.utils.Util.getUrlParam = function (key) {
  var params = orc.utils.Util.getUrlParams();
  var _g = 0;
  while (_g < params.length) {
    var param = params[_g];
    ++_g;
    var p = param;
    if (p.key == key) return p.value;
  }
  return "";
};
orc.utils.Util.getUrlParams = function () {
  var url = js.Lib.window.location.href;
  var results = new Array();
  var index = url.indexOf("?");
  if (index > 0) {
    var params = HxOverrides.substr(url, index + 1, null);
    var lines = params.split("&");
    var _g = 0;
    while (_g < lines.length) {
      var line = lines[_g];
      ++_g;
      var terms = line.split("=");
      if (terms.length == 2) {
        var val = new orc.utils.UrlParam();
        val.key = terms[0];
        val.value = terms[1];
        results.push(val);
      }
    }
  }
  return results;
};
orc.utils.Util.getXmlChilds = function (xml) {
  var i = xml.elements();
  var list = new Array();
  while (i.hasNext() == true) {
    var node = i.next();
    list.push(node);
  }
  return list;
};
orc.utils.Util.searchPos = function (txt, keyword) {
  var list = [];
  var index = -1;
  while (true) {
    var from = 0;
    if (index != -1) {
      from = index + keyword.length;
      if (from < 0) from = 0;
    }
    index = txt.indexOf(keyword, from);
    if (index > -1 && index + keyword.length <= txt.length) list.push(index);
    else break;
  }
  return list;
};
orc.utils.Util.createSearchResults = function (txt, keyword, posList, page) {
  var results = [];
  var maxChars = 50;
  var coloredWord = "<font color='#FF0000'>" + keyword + "</font>";
  var _g1 = 0,
    _g = posList.length;
  while (_g1 < _g) {
    var i = _g1++;
    var index = posList[i];
    var r = new core.SearchResult("", page);
    var offset = index;
    if (txt.length < maxChars) r.content = txt;
    else {
      var from = (index - Math.max(0, maxChars - keyword.length) / 2) | 0;
      if (from < 0) from = 0;
      r.content = HxOverrides.substr(txt, from, maxChars);
      offset = index - from;
      if (from + maxChars < txt.length) r.content += " ...";
      if (from > 0) {
        r.content = "... " + r.content;
        offset += 4;
      }
    }
    r.content =
      HxOverrides.substr(r.content, 0, offset) +
      "<font color='#FF0000'>" +
      HxOverrides.substr(r.content, offset, keyword.length) +
      "</font>" +
      HxOverrides.substr(r.content, offset + keyword.length, null);
    results.push(r);
  }
  return results;
};
var $_;
function $bind(o, m) {
  var f = function () {
    return f.method.apply(f.scope, arguments);
  };
  f.scope = o;
  f.method = m;
  return f;
}
if (Array.prototype.indexOf)
  HxOverrides.remove = function (a, o) {
    var i = a.indexOf(o);
    if (i == -1) return false;
    a.splice(i, 1);
    return true;
  };
else null;
Math.__name__ = ["Math"];
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
Math.isFinite = function (i) {
  return isFinite(i);
};
Math.isNaN = function (i) {
  return isNaN(i);
};
String.prototype.__class__ = String;
String.__name__ = true;
Array.prototype.__class__ = Array;
Array.__name__ = true;
Date.prototype.__class__ = Date;
Date.__name__ = ["Date"];
var Int = { __name__: ["Int"] };
var Dynamic = { __name__: ["Dynamic"] };
var Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = { __name__: ["Class"] };
var Enum = {};
var Void = { __ename__: ["Void"] };
Xml.Element = "element";
Xml.PCData = "pcdata";
Xml.CData = "cdata";
Xml.Comment = "comment";
Xml.DocType = "doctype";
Xml.Prolog = "prolog";
Xml.Document = "document";
if (typeof document != "undefined") js.Lib.document = document;
if (typeof window != "undefined") {
  js.Lib.window = window;
  js.Lib.window.onerror = function (msg, url, line) {
    var f = js.Lib.onerror;
    if (f == null) return false;
    return f(msg, [url + ":" + line]);
  };
}
js.XMLHttpRequest = window.XMLHttpRequest
  ? XMLHttpRequest
  : window.ActiveXObject
  ? function () {
      try {
        return new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        try {
          return new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e1) {
          throw "Unable to create XMLHttpRequest object.";
        }
      }
    }
  : (function ($this) {
      var $r;
      throw "Unable to create XMLHttpRequest object.";
      return $r;
    })(this);
L.instance = new Hash();
RunTime.useGoogleUaAsLogViewer = true;
RunTime.urlIndex = "html5forpc.html";
RunTime.urlZoom = "zoom.html";
RunTime.urlRoot = "";
RunTime.urlBookinfo = RunTime.urlRoot + "data/bookinfo.xml";
RunTime.urlPageInfo = RunTime.urlRoot + "data/pages.xml";
RunTime.urlHotlinks = RunTime.urlRoot + "data/hotlinks.xml";
RunTime.urlHotlinks2 = RunTime.urlRoot + "data/texts.xml";
RunTime.urlContents = RunTime.urlRoot + "data/contents.xml";
RunTime.urlSearch = RunTime.urlRoot + "data/search.xml";
RunTime.urlVideos = RunTime.urlRoot + "data/videos.xml";
RunTime.urlButtons = RunTime.urlRoot + "data/buttons.xml";
RunTime.urlAudios = RunTime.urlRoot + "data/sounds.xml";
RunTime.urlBookmarks = RunTime.urlRoot + "data/bookmarks.xml";
RunTime.urlLang = RunTime.urlRoot + "data/languages/languages.xml";
RunTime.urlSlideshow = RunTime.urlRoot + "data/slideshow.xml";
RunTime.urlShareInfo = RunTime.urlRoot + "data/share.xml";
RunTime.urlAbout = RunTime.urlRoot + "data/copyright.xml";
RunTime.searchHtmlCache = "";
RunTime.inputHtmlCache = "";
RunTime.isFullscreen = false;
RunTime.resizeTimer = new haxe.Timer(600);
RunTime.languages = new Array();
RunTime.book = new core.Book();
RunTime.singlePage = false;
RunTime.bookTop = 0;
RunTime.bookBottom = 0;
RunTime.bookLeft = 0;
RunTime.bookRight = 0;
RunTime.pcode = "";
RunTime.bottomBarAlpha = 0.6;
RunTime.bottomBarHeight = 40;
RunTime.autoflipButtonUnselectedAlpha = 0.5;
RunTime.doubleClickIntervalMs = 300;
RunTime.doubleZoomIntervalMs = 1000;
RunTime.highLights = new Array();
RunTime.notes = new Array();
RunTime.bLocked = true;
RunTime.kvPrex = "";
RunTime.key = "";
Zoom.imgSrc = "";
Zoom.pageNum = "";
Zoom.bookId = "";
Zoom.analyticsUA = "";
Zoom.bookTitle = "";
Zoom.bbv = "";
Zoom.pcode = "";
Zoom.hotlinks = [];
Zoom.videos = [];
Zoom.buttons = [];
Zoom.xOffset = 0;
Zoom.yOffset = 0;
Zoom.popupXOffset = 0;
Zoom.popupYOffset = 0;
Main.main();

