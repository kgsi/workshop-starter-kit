const imgFrame2147225152 =
  "http://localhost:3845/assets/bdd39bad8748bc2dfdb194f747956ce5885984a1.png";
const imgImage1 =
  "http://localhost:3845/assets/5ee6c3ddb375c4420854df43ef2ebdc5da72cff1.png";
const imgFrame =
  "http://localhost:3845/assets/ad2e15eab256166f480cf515d2ec35af4ea395c1.svg";

export default function Site() {
  return (
    <div
      className="bg-black box-border content-stretch flex flex-col gap-10 items-center justify-start pb-24 pt-8 px-[230px] relative size-full"
      data-name="Site"
      data-node-id="1:26868"
    >
      <div
        className="bg-white box-border content-stretch flex items-center justify-between pl-5 pr-[15px] py-[15px] relative rounded-[100px] shrink-0 w-full"
        data-node-id="1:26872"
      >
        <div
          className="content-stretch flex gap-[7.286px] items-center justify-start relative shrink-0"
          data-name="Logo Container"
          data-node-id="5:36"
        >
          <div
            className="relative shrink-0 size-12"
            data-name="Frame"
            data-node-id="5:37"
          >
            <img alt="" className="block max-w-none size-full" src={imgFrame} />
          </div>
          <div
            className="font-['Noto_Sans:ExtraBold',_sans-serif] font-extrabold leading-[0] relative shrink-0 text-[20.06px] text-black text-center text-nowrap tracking-[2.006px] uppercase"
            data-node-id="5:39"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="leading-[1.1] whitespace-pre">STEP by STEP</p>
          </div>
        </div>
        <div
          className="content-stretch flex gap-2.5 items-center justify-end relative shrink-0"
          data-node-id="1:26874"
        >
          <div
            className="bg-[#e1e1e1] box-border content-stretch flex h-11 items-center justify-center overflow-clip px-[25px] py-[11px] relative rounded-[60px] shrink-0 w-[120px]"
            data-node-id="1:26875"
          >
            <div
              className="font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap"
              data-node-id="1:26876"
            >
              <p className="leading-[normal] whitespace-pre">デモを予約</p>
            </div>
          </div>
          <div
            className="bg-black box-border content-stretch flex h-11 items-center justify-center overflow-clip px-[25px] py-[11px] relative rounded-[60px] shrink-0 w-[120px]"
            data-node-id="1:26877"
          >
            <div
              className="font-['Inter:Bold',_'Noto_Sans_JP:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white"
              data-node-id="1:26878"
            >
              <p className="leading-[normal] whitespace-pre">試す</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="content-stretch flex flex-col gap-6 items-center justify-start leading-[0] relative shrink-0 text-center text-white w-[801px]"
        data-node-id="1:26869"
      >
        <div
          className="font-['Noto_Sans_JP:Bold',_sans-serif] font-bold leading-[1.3] min-w-full relative shrink-0 text-[48px] uppercase"
          data-node-id="5:41"
          style={{ width: "min-content" }}
        >
          <p className="mb-0">デザインと、テクノロジーと、</p>
          <p className>コミュニティを創る。</p>
        </div>
        <div
          className="font-['Inter:Regular',_'Noto_Sans_JP:Regular',_sans-serif] font-normal not-italic relative shrink-0 text-[24px] w-[701px]"
          data-node-id="1:26871"
        >
          <p className="leading-[1.8]">
            整理されていない指標を優先順位を付けた実行可能なステップに変換します—Slackが鳴り始める直前に。
          </p>
        </div>
      </div>
      <div
        className="bg-center bg-cover bg-no-repeat h-[521px] overflow-clip relative rounded-[20px] shrink-0 w-[968px]"
        data-node-id="1:26879"
        style={{ backgroundImage: `url('${imgFrame2147225152}')` }}
      >
        <div
          className="absolute bg-center bg-cover bg-no-repeat h-[681px] left-[-140px] top-[-45px] w-[1248px]"
          data-name="image 1"
          data-node-id="5:47"
          style={{ backgroundImage: `url('${imgImage1}')` }}
        />
      </div>
    </div>
  );
}
