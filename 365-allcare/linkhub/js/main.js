
const CLINIC = {
  name: "365올케어치과",
  lat: 37.5547,
  lng: 127.0107,
  address: "서울특별시 중구 동호로 171 더그레이스빌딩 4층"
};

/*
  카카오맵 사용 방법
  1) Kakao Developers > 내 애플리케이션에서 JavaScript 키 발급
  2) index.html의 YOUR_KAKAO_JAVASCRIPT_KEY를 실제 키로 교체
  3) Web 플랫폼 사이트 도메인 등록 (예: https://link.allcaredc.kr)
*/
window.initAllcareMap = function () {
  const mapContainer = document.getElementById("map");
  if (!mapContainer || !window.kakao || !window.kakao.maps) return;

  kakao.maps.load(() => {
    mapContainer.innerHTML = "";
    const position = new kakao.maps.LatLng(CLINIC.lat, CLINIC.lng);
    const map = new kakao.maps.Map(mapContainer, {
      center: position,
      level: 3
    });

    const marker = new kakao.maps.Marker({ position });
    marker.setMap(map);

    const content = `
      <div style="
        padding:8px 10px;
        font:600 12px Pretendard,sans-serif;
        color:#062741;
        background:#FDFBEC;
        border:1px solid rgba(6,39,65,.18);
        white-space:nowrap;
      ">365올케어치과</div>`;
    const overlay = new kakao.maps.CustomOverlay({
      content,
      position,
      yAnchor: 2.2
    });
    overlay.setMap(map);
  });
};
