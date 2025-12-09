<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\personalController;
use App\Http\Controllers\aboutController;
use App\Http\Controllers\skillController;
use App\Http\Controllers\projectControlle;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



Route::get('/about', [aboutController::class, 'aboutget']);
Route::get('/personal', [personalController::class, 'personalget']);
Route::get('/skill', [skillController::class, 'skillget']);
Route::get('/project', [projectControlle::class, 'projectget']);
