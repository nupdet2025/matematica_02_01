gdjs.IntroducaoCode = {};
gdjs.IntroducaoCode.localVariables = [];
gdjs.IntroducaoCode.GDbtn_9595jogarObjects1= [];
gdjs.IntroducaoCode.GDbtn_9595jogarObjects2= [];
gdjs.IntroducaoCode.GDIntro_9595BackgroundObjects1= [];
gdjs.IntroducaoCode.GDIntro_9595BackgroundObjects2= [];
gdjs.IntroducaoCode.GDpainel_959501Objects1= [];
gdjs.IntroducaoCode.GDpainel_959501Objects2= [];
gdjs.IntroducaoCode.GDbtn_9595nextObjects1= [];
gdjs.IntroducaoCode.GDbtn_9595nextObjects2= [];
gdjs.IntroducaoCode.GDbtn_9595replayObjects1= [];
gdjs.IntroducaoCode.GDbtn_9595replayObjects2= [];
gdjs.IntroducaoCode.GDAcertoObjects1= [];
gdjs.IntroducaoCode.GDAcertoObjects2= [];
gdjs.IntroducaoCode.GDCursorObjects1= [];
gdjs.IntroducaoCode.GDCursorObjects2= [];
gdjs.IntroducaoCode.GDAcerto2Objects1= [];
gdjs.IntroducaoCode.GDAcerto2Objects2= [];
gdjs.IntroducaoCode.GDAcerto3Objects1= [];
gdjs.IntroducaoCode.GDAcerto3Objects2= [];
gdjs.IntroducaoCode.GDAcerto4Objects1= [];
gdjs.IntroducaoCode.GDAcerto4Objects2= [];
gdjs.IntroducaoCode.GDAcerto5Objects1= [];
gdjs.IntroducaoCode.GDAcerto5Objects2= [];


gdjs.IntroducaoCode.asyncCallback16476756 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.IntroducaoCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Introducao_02", false);
}gdjs.IntroducaoCode.localVariables.length = 0;
}
gdjs.IntroducaoCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.IntroducaoCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.IntroducaoCode.asyncCallback16476756(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.IntroducaoCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.IntroducaoCode.GDCursorObjects1);
{for(var i = 0, len = gdjs.IntroducaoCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDCursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\bgm_music.mp3", 1, true, 20, 1);
}{gdjs.evtsExt__PauseFocusLost__Active.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audio_01.mp3", 2, false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.IntroducaoCode.GDCursorObjects1);
{for(var i = 0, len = gdjs.IntroducaoCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.IntroducaoCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.IntroducaoCode.GDCursorObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.IntroducaoCode.GDbtn_9595nextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroducaoCode.GDbtn_9595nextObjects1.length;i<l;++i) {
    if ( gdjs.IntroducaoCode.GDbtn_9595nextObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.IntroducaoCode.GDbtn_9595nextObjects1[k] = gdjs.IntroducaoCode.GDbtn_9595nextObjects1[i];
        ++k;
    }
}
gdjs.IntroducaoCode.GDbtn_9595nextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.5);
}
{ //Subevents
gdjs.IntroducaoCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_replay"), gdjs.IntroducaoCode.GDbtn_9595replayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroducaoCode.GDbtn_9595replayObjects1.length;i<l;++i) {
    if ( gdjs.IntroducaoCode.GDbtn_9595replayObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.IntroducaoCode.GDbtn_9595replayObjects1[k] = gdjs.IntroducaoCode.GDbtn_9595replayObjects1[i];
        ++k;
    }
}
gdjs.IntroducaoCode.GDbtn_9595replayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audio_01.mp3", 2, false, 100, 1);
}}

}


};

gdjs.IntroducaoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroducaoCode.GDbtn_9595jogarObjects1.length = 0;
gdjs.IntroducaoCode.GDbtn_9595jogarObjects2.length = 0;
gdjs.IntroducaoCode.GDIntro_9595BackgroundObjects1.length = 0;
gdjs.IntroducaoCode.GDIntro_9595BackgroundObjects2.length = 0;
gdjs.IntroducaoCode.GDpainel_959501Objects1.length = 0;
gdjs.IntroducaoCode.GDpainel_959501Objects2.length = 0;
gdjs.IntroducaoCode.GDbtn_9595nextObjects1.length = 0;
gdjs.IntroducaoCode.GDbtn_9595nextObjects2.length = 0;
gdjs.IntroducaoCode.GDbtn_9595replayObjects1.length = 0;
gdjs.IntroducaoCode.GDbtn_9595replayObjects2.length = 0;
gdjs.IntroducaoCode.GDAcertoObjects1.length = 0;
gdjs.IntroducaoCode.GDAcertoObjects2.length = 0;
gdjs.IntroducaoCode.GDCursorObjects1.length = 0;
gdjs.IntroducaoCode.GDCursorObjects2.length = 0;
gdjs.IntroducaoCode.GDAcerto2Objects1.length = 0;
gdjs.IntroducaoCode.GDAcerto2Objects2.length = 0;
gdjs.IntroducaoCode.GDAcerto3Objects1.length = 0;
gdjs.IntroducaoCode.GDAcerto3Objects2.length = 0;
gdjs.IntroducaoCode.GDAcerto4Objects1.length = 0;
gdjs.IntroducaoCode.GDAcerto4Objects2.length = 0;
gdjs.IntroducaoCode.GDAcerto5Objects1.length = 0;
gdjs.IntroducaoCode.GDAcerto5Objects2.length = 0;

gdjs.IntroducaoCode.eventsList1(runtimeScene);
gdjs.IntroducaoCode.GDbtn_9595jogarObjects1.length = 0;
gdjs.IntroducaoCode.GDbtn_9595jogarObjects2.length = 0;
gdjs.IntroducaoCode.GDIntro_9595BackgroundObjects1.length = 0;
gdjs.IntroducaoCode.GDIntro_9595BackgroundObjects2.length = 0;
gdjs.IntroducaoCode.GDpainel_959501Objects1.length = 0;
gdjs.IntroducaoCode.GDpainel_959501Objects2.length = 0;
gdjs.IntroducaoCode.GDbtn_9595nextObjects1.length = 0;
gdjs.IntroducaoCode.GDbtn_9595nextObjects2.length = 0;
gdjs.IntroducaoCode.GDbtn_9595replayObjects1.length = 0;
gdjs.IntroducaoCode.GDbtn_9595replayObjects2.length = 0;
gdjs.IntroducaoCode.GDAcertoObjects1.length = 0;
gdjs.IntroducaoCode.GDAcertoObjects2.length = 0;
gdjs.IntroducaoCode.GDCursorObjects1.length = 0;
gdjs.IntroducaoCode.GDCursorObjects2.length = 0;
gdjs.IntroducaoCode.GDAcerto2Objects1.length = 0;
gdjs.IntroducaoCode.GDAcerto2Objects2.length = 0;
gdjs.IntroducaoCode.GDAcerto3Objects1.length = 0;
gdjs.IntroducaoCode.GDAcerto3Objects2.length = 0;
gdjs.IntroducaoCode.GDAcerto4Objects1.length = 0;
gdjs.IntroducaoCode.GDAcerto4Objects2.length = 0;
gdjs.IntroducaoCode.GDAcerto5Objects1.length = 0;
gdjs.IntroducaoCode.GDAcerto5Objects2.length = 0;


return;

}

gdjs['IntroducaoCode'] = gdjs.IntroducaoCode;
