<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\about;
class aboutController extends Controller
{

   public function about( Request $request){
     $validation  = $request->validate(
        [
           'about_id' => 'required|exists:personal_information,id',
           'name' => 'required|string|max:244',
           'contact' => 'required|string|max:15',
           'loction' => 'required|string',  
           'eduction' =>  'required|string',
            'level' => 'required|string',
        ]
     );

     if(!$validation){
        return response()->json(
            [
                'error' => 'validation error'
            ]
        );
     }

  $user = about::create(
    [
        'about_id' => $request->about_id,
        'name' => $request->name,
        'contact' => $request->contact,
        'loction' => $request->location,
        'eduction' => $request->eduction,
        'level' => $request->level
    ]
  );
  if(!$user){
    return response()->json(
        [
            'error' => 'Data not inserted',
        ]
    );
  }
  return response()->json(
    [
        'message' => 'data inserted'
    ]
  );

   }
   public function aboutget(){
    $user = about::all();
    return $user;
   }
}


