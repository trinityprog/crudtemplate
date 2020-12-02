<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'body'
    ];

    protected $appends = ['created_at_format'];

    public function getCreatedAtFormatAttribute(){
        return $this->created_at->format('d.m.Y');
    }
}
